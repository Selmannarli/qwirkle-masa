package com.renkio.game;
import android.app.*;
import android.os.Bundle;
import android.webkit.WebView;
import java.util.concurrent.*;

/** Tests packaged HTML, worker-based hints and gameplay with networking disabled. */
public class OfflineSmoke extends Instrumentation {
 private WebView web;
 protected void dismissSystemWait()throws Exception{android.view.accessibility.AccessibilityNodeInfo root=getUiAutomation().getRootInActiveWindow();if(root!=null&&root.getPackageName()!=null&&"android".contentEquals(root.getPackageName()))for(android.view.accessibility.AccessibilityNodeInfo n:root.findAccessibilityNodeInfosByText("Wait"))if(n.isClickable()){n.performAction(android.view.accessibility.AccessibilityNodeInfo.ACTION_CLICK);Thread.sleep(500);break;}}
 private void screenshot(String name)throws Exception{dismissSystemWait();android.graphics.Bitmap bitmap=getUiAutomation().takeScreenshot();try(java.io.FileOutputStream out=new java.io.FileOutputStream(new java.io.File(getTargetContext().getExternalFilesDir(null),name))){bitmap.compress(android.graphics.Bitmap.CompressFormat.PNG,100,out);}bitmap.recycle();}
 protected WebView findWebView(android.view.View root){if(root instanceof WebView)return (WebView)root;if(root instanceof android.view.ViewGroup){android.view.ViewGroup group=(android.view.ViewGroup)root;for(int i=0;i<group.getChildCount();i++){WebView found=findWebView(group.getChildAt(i));if(found!=null)return found;}}return null;}
 @Override public void onCreate(Bundle args){start();}
 private String js(String script)throws Exception{CountDownLatch latch=new CountDownLatch(1);String[] value={""};runOnMainSync(()->web.evaluateJavascript(script,v->{value[0]=v;latch.countDown();}));if(!latch.await(5,TimeUnit.SECONDS))throw new Exception("WebView script timeout");return value[0];}
 private void waitFor(String condition)throws Exception{for(int i=0;i<80;i++){if("true".equals(js(condition)))return;Thread.sleep(250);}throw new Exception("Condition timed out: "+condition);}
 @Override public void onStart(){Bundle result=new Bundle();try{
  dismissSystemWait();Activity activity=startActivitySync(getTargetContext().getPackageManager().getLaunchIntentForPackage("com.renkio.game"));web=findWebView(activity.getWindow().getDecorView());
  waitFor("typeof document.querySelector('#practice')?.onclick==='function'");
  js("document.getElementById('soloMode').click();document.getElementById('practice').click()");
  waitFor("document.body.dataset.view==='game'&&!document.getElementById('hint').disabled");
  js("document.getElementById('hint').click()");
  waitFor("!document.getElementById('coach').classList.contains('hidden')");
  js("document.getElementById('applyHint').click()");
  waitFor("!document.getElementById('commit').disabled");
  js("document.getElementById('commit').click()");
  waitFor("!document.getElementById('lastMove').classList.contains('hidden')");
  waitFor("!document.getElementById('hint').disabled");
  if(!js("document.getElementById('lastMove').textContent").contains("Miko"))throw new Exception("Offline bot did not finish its turn");
  if(!"true".equals(js("document.documentElement.scrollWidth<=innerWidth&&document.querySelector('#rack').children.length===6")))throw new Exception("Layout or hand regression");
  screenshot("store-game.png");
  result.putString("result","PASS: bundled UI, offline module Worker, player move, bot response, restored hand and responsive layout");finish(Activity.RESULT_OK,result);
 }catch(Exception e){result.putString("error",e.toString());finish(Activity.RESULT_CANCELED,result);}}
}
