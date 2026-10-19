package com.renkio.game;
import android.app.*;
import android.os.Bundle;
import android.webkit.WebView;
import org.json.*;
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.*;

/** Device smoke test: real WebView load and Android/desktop room interoperability. */
public class CrossplaySmoke extends Instrumentation {
 private Bundle args;
 private final String base="https://qwirkle-masa.onrender.com";
 @Override public void onCreate(Bundle arguments){args=arguments;start();}
 private JSONObject post(String route,JSONObject body)throws Exception{
  HttpURLConnection c=(HttpURLConnection)new URL(base+"/api/"+route).openConnection();
  c.setRequestMethod("POST");c.setConnectTimeout(65000);c.setReadTimeout(65000);c.setDoOutput(true);c.setRequestProperty("Content-Type","application/json");
  try(java.io.OutputStream out=c.getOutputStream()){out.write(body.toString().getBytes(StandardCharsets.UTF_8));}
  int status=c.getResponseCode();String response=new String((status<400?c.getInputStream():c.getErrorStream()).readAllBytes(),StandardCharsets.UTF_8);c.disconnect();
  if(status!=200)throw new Exception(route+": "+response);return new JSONObject(response);
 }
 private JSONObject auth(String room,String token)throws Exception{return new JSONObject().put("room",room).put("token",token);}
 private JSONArray opening(JSONArray hand)throws Exception{
  List<JSONObject> best=new ArrayList<>();for(String attr:new String[]{"c","s"})for(int n=0;n<6;n++){
   List<JSONObject> group=new ArrayList<>();Set<String> seen=new HashSet<>();for(int i=0;i<hand.length();i++){JSONObject t=hand.getJSONObject(i);String k=t.getInt("c")+":"+t.getInt("s");if(t.getInt(attr)==n&&seen.add(k))group.add(t);}if(group.size()>best.size())best=group;
  }JSONArray result=new JSONArray();for(int i=0;i<best.size();i++)result.put(new JSONObject().put("id",best.get(i).getString("id")).put("x",i).put("y",0));return result;
 }
 @Override public void onStart(){Bundle result=new Bundle();try{
  Activity activity=startActivitySync(getTargetContext().getPackageManager().getLaunchIntentForPackage("com.renkio.game"));
  java.lang.reflect.Field field=MainActivity.class.getDeclaredField("web");field.setAccessible(true);WebView web=(WebView)field.get(activity);
  boolean loaded=false;for(int i=0;i<60;i++){
   CountDownLatch latch=new CountDownLatch(1);String[] value={""};runOnMainSync(()->web.evaluateJavascript("JSON.stringify({ready:typeof document.querySelector('#create')?.onclick==='function',title:document.title,hint:!!document.querySelector('#hint')})",v->{value[0]=v;latch.countDown();}));latch.await(2,TimeUnit.SECONDS);
   if(value[0].contains("ready\\\":true")&&value[0].contains("hint\\\":false")){loaded=true;break;}Thread.sleep(1000);
  }if(!loaded)throw new Exception("Updated WebView interface did not load");
  String room=args.getString("room");JSONObject joined=post("join",new JSONObject().put("room",room).put("name","Android QA"));String token=joined.getString("token");JSONObject state=null;
  for(int i=0;i<60;i++){state=post("state",auth(room,token));if(state.has("game")&&!state.isNull("game")&&state.getJSONObject("game").getInt("turn")==1)break;Thread.sleep(500);}
  JSONObject game=state.getJSONObject("game");if(game.getInt("turn")!=1)throw new Exception("Android turn never arrived");JSONArray players=game.getJSONArray("players");if(players.getJSONObject(0).has("hand"))throw new Exception("Opponent hand exposed");JSONArray hand=players.getJSONObject(1).getJSONArray("hand");JSONObject action=auth(room,token).put("revision",game.getInt("revision"));
  if(game.getJSONObject("board").length()==0)action.put("action","play").put("placements",opening(hand));else action.put("action","exchange").put("ids",new JSONArray().put(hand.getJSONObject(0).getString("id")));
  JSONObject played=post("action",action).getJSONObject("game");if(played.getInt("revision")!=game.getInt("revision")+1)throw new Exception("Revision did not advance");
  result.putString("result","PASS: WebView loaded without hints; Android joined desktop room; private hands and turn action verified");result.putInt("revision",played.getInt("revision"));finish(Activity.RESULT_OK,result);
 }catch(Exception e){result.putString("error",e.toString());finish(Activity.RESULT_CANCELED,result);}}
}
