import com.renkio.game.ClientStore;
import java.io.*;import java.nio.file.*;import java.nio.charset.StandardCharsets;import java.util.*;
public class ClientStoreCheck {
 static List<ClientStore.Entry> entries(String value)throws Exception{List<ClientStore.Entry> e=new ArrayList<>();for(String name:new String[]{"index.html","app.mjs","engine.mjs","board.mjs","ui.mjs","style.css"}){byte[] bytes=(value+name).getBytes(StandardCharsets.UTF_8);e.add(new ClientStore.Entry(name,ClientStore.hash(bytes),bytes));}return e;}
 static String revision(List<ClientStore.Entry> e)throws Exception{List<String> lines=new ArrayList<>();for(var v:e)lines.add(v.path+":"+v.hash);Collections.sort(lines);return ClientStore.hash(String.join("\n",lines).getBytes(StandardCharsets.UTF_8));}
 static void require(boolean ok,String message){if(!ok)throw new AssertionError(message);}
 public static void main(String[] args)throws Exception{File root=Files.createTempDirectory(Path.of(args[0]),"client-store-").toFile();var a=entries("old");var b=entries("new");String ar=revision(a),br=revision(b);ClientStore store=new ClientStore(root);require(store.current()==null,"fresh store");store.install(ar,a);require(new ClientStore(root).current().getName().equals(ar),"survives close/reopen");
 try{store.install(br,b.subList(0,5));throw new AssertionError("partial installed");}catch(IOException expected){}require(store.current().getName().equals(ar),"partial update keeps last good revision");
 List<ClientStore.Entry> bad=new ArrayList<>(b);bad.set(0,new ClientStore.Entry("../escape.html",b.get(0).hash,b.get(0).data));try{store.install(br,bad);throw new AssertionError("traversal installed");}catch(IOException expected){}
 bad=new ArrayList<>(b);bad.set(0,new ClientStore.Entry(b.get(0).path,b.get(0).hash,new byte[]{1}));try{store.install(br,bad);throw new AssertionError("corrupt installed");}catch(IOException expected){}
 File interrupted=new File(root,"stage-interrupted");interrupted.mkdir();Files.write(new File(interrupted,"index.html").toPath(),new byte[]{1});require(new ClientStore(root).current().getName().equals(ar),"interrupted download never activates");
 store.install(br,b);require(new ClientStore(root).current().getName().equals(br),"new revision persists without network");require(new File(root,ar).isDirectory(),"previous page stays intact");System.out.println("PASS: persisted update, offline restart, partial/corrupt download rejection, safe paths, atomic activation");}
}

