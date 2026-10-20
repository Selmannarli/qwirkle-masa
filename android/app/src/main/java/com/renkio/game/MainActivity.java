package com.renkio.game;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.os.Build;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.*;
import android.widget.*;
import java.io.*;
import java.util.*;

public final class MainActivity extends Activity {
 private static final String HOST="qwirkle-masa.onrender.com", HOME="https://"+HOST+"/";
 private ValueCallback<Uri[]> photoCallback; private WebView web; private FrameLayout frame; private ProgressBar progress;
 private boolean trusted(Uri uri){return "https".equals(uri.getScheme())&&HOST.equals(uri.getHost())&&(uri.getPort()==-1||uri.getPort()==443);}
 private boolean page(Uri uri){String p=uri.getPath();return trusted(uri)&&(p.equals("/")||p.equals("/index.html")||p.equals("/privacy.html"));}
 public final class NativeUi {
  @JavascriptInterface public void theme(String theme){runOnUiThread(()->{
   boolean dark="night".equals(theme);int color=Color.parseColor(dark?"#111827":"#f5f6fa");frame.setBackgroundColor(color);web.setBackgroundColor(color);
   if(Build.VERSION.SDK_INT>=30){getWindow().getInsetsController().setSystemBarsAppearance(dark?0:android.view.WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS|android.view.WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS,android.view.WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS|android.view.WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS);}
   else getWindow().getDecorView().setSystemUiVisibility(dark?0:View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR|View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
   getWindow().setStatusBarColor(color);getWindow().setNavigationBarColor(color);
  });}
 }
 private WebResourceResponse asset(WebResourceRequest request){
  Uri uri=request.getUrl();if(!trusted(uri)||!"GET".equals(request.getMethod())||uri.getPath().startsWith("/api/"))return null;
  String path=uri.getPath().equals("/")?"index.html":uri.getPath().substring(1);
  if(path.contains("..")||path.contains("\\"))return missing();
  String mime=path.endsWith(".html")?"text/html":path.endsWith(".mjs")?"text/javascript":path.endsWith(".css")?"text/css":path.endsWith(".svg")?"image/svg+xml":path.endsWith(".woff2")?"font/woff2":path.endsWith(".png")?"image/png":path.endsWith(".webp")?"image/webp":"application/octet-stream";
  try{InputStream stream=getAssets().open("game/"+path);Map<String,String> headers=new HashMap<>();headers.put("Cache-Control","no-store");headers.put("X-Content-Type-Options","nosniff");headers.put("Content-Security-Policy","default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.googleusercontent.com; connect-src 'self' https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://qwirkle-v-selman.firebaseapp.com; frame-src https://qwirkle-v-selman.firebaseapp.com; base-uri 'none'; form-action 'self'");return new WebResourceResponse(mime,"UTF-8",200,"OK",headers,stream);}catch(IOException e){return missing();}
 }
 private WebResourceResponse missing(){return new WebResourceResponse("text/plain","UTF-8",404,"Not Found",Collections.emptyMap(),new ByteArrayInputStream(new byte[0]));}
 @Override public void onCreate(Bundle state){super.onCreate(state);
  frame=new FrameLayout(this);frame.setBackgroundColor(Color.parseColor("#f5f6fa"));setContentView(frame);
  frame.setOnApplyWindowInsetsListener((v,insets)->{if(Build.VERSION.SDK_INT>=30){android.graphics.Insets bars=insets.getInsets(WindowInsets.Type.systemBars()|WindowInsets.Type.displayCutout()|WindowInsets.Type.ime());v.setPadding(bars.left,bars.top,bars.right,bars.bottom);}else v.setPadding(insets.getSystemWindowInsetLeft(),insets.getSystemWindowInsetTop(),insets.getSystemWindowInsetRight(),insets.getSystemWindowInsetBottom());return insets;});
  WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);web=new WebView(this);frame.addView(web,new FrameLayout.LayoutParams(-1,-1));
  WebSettings settings=web.getSettings();settings.setJavaScriptEnabled(true);settings.setDomStorageEnabled(true);settings.setAllowFileAccess(false);settings.setAllowContentAccess(false);settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);settings.setMediaPlaybackRequiresUserGesture(true);settings.setSafeBrowsingEnabled(true);settings.setSupportMultipleWindows(false);web.addJavascriptInterface(new NativeUi(),"RenkioNative");
  progress=new ProgressBar(this,null,android.R.attr.progressBarStyleHorizontal);frame.addView(progress,new FrameLayout.LayoutParams(-1,4));
  web.setWebChromeClient(new WebChromeClient(){@Override public boolean onShowFileChooser(WebView view,ValueCallback<Uri[]> callback,FileChooserParams params){if(photoCallback!=null)photoCallback.onReceiveValue(null);photoCallback=callback;Intent pick=new Intent(Intent.ACTION_OPEN_DOCUMENT);pick.setType("image/*");pick.addCategory(Intent.CATEGORY_OPENABLE);try{startActivityForResult(pick,301);}catch(Exception error){photoCallback.onReceiveValue(null);photoCallback=null;}return true;}@Override public void onProgressChanged(WebView view,int value){progress.setProgress(value);progress.setVisibility(value==100?View.GONE:View.VISIBLE);}});
  web.setWebViewClient(new WebViewClient(){
   @Override public WebResourceResponse shouldInterceptRequest(WebView view,WebResourceRequest request){return asset(request);}
   @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request){Uri uri=request.getUrl();if(page(uri))return false;if("https".equals(uri.getScheme())||"mailto".equals(uri.getScheme()))try{startActivity(new Intent(Intent.ACTION_VIEW,uri));}catch(Exception ignored){}return true;}
   @Override public void onPageFinished(WebView view,String url){if(trusted(Uri.parse(url)))view.evaluateJavascript("(()=>{const sync=()=>RenkioNative.theme(document.body.dataset.theme||'day');sync();new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['data-theme']})})()",null);}
   @Override public boolean onRenderProcessGone(WebView view,RenderProcessGoneDetail detail){frame.removeView(view);view.destroy();new AlertDialog.Builder(MainActivity.this).setMessage("Oyun yeniden açılsın mı?").setPositiveButton("Yeniden aç",(d,w)->recreate()).setNegativeButton("Kapat",(d,w)->finish()).setCancelable(false).show();return true;}
  });
  if(state==null||web.restoreState(state)==null){Uri link=getIntent().getData();web.loadUrl(link!=null&&page(link)?link.toString():HOME);}
 }
 @Override protected void onActivityResult(int request,int result,Intent data){super.onActivityResult(request,result,data);if(request==301&&photoCallback!=null){photoCallback.onReceiveValue(result==RESULT_OK&&data!=null&&data.getData()!=null?new Uri[]{data.getData()}:null);photoCallback=null;}}
 @Override protected void onNewIntent(Intent intent){super.onNewIntent(intent);setIntent(intent);Uri link=intent.getData();if(link!=null&&page(link))web.loadUrl(link.toString());}
 @Override protected void onSaveInstanceState(Bundle state){web.saveState(state);super.onSaveInstanceState(state);}
 @Override public void onBackPressed(){web.evaluateJavascript("(()=>{const d=document.querySelector('dialog[open]');if(d){if(d.id==='matchDialog')document.getElementById('cancelMatch').click();else d.close();return 'handled'}if(document.body.dataset.view&&document.body.dataset.view!=='home'){document.getElementById('leave').click();return 'handled'}return document.body.dataset.view==='home'?'home':'page'})()",result->{if("\"page\"".equals(result)&&web.canGoBack())web.goBack();else if("\"home\"".equals(result)||"\"page\"".equals(result))new AlertDialog.Builder(this).setMessage("Renkio kapatılsın mı?").setNegativeButton("Oyunda kal",null).setPositiveButton("Kapat",(d,w)->finish()).show();});}
 @Override protected void onDestroy(){if(photoCallback!=null){photoCallback.onReceiveValue(null);photoCallback=null;}if(web!=null){web.removeJavascriptInterface("RenkioNative");web.destroy();}super.onDestroy();}
}
