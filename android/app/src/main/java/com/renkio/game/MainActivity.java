package com.renkio.game;
import android.app.Activity;
import android.os.Bundle;
import android.graphics.Color;
import android.net.Uri;
import android.content.Intent;
import android.view.View;
import android.view.WindowInsets;
import android.widget.*;
import android.webkit.*;

public final class MainActivity extends Activity {
 private static final String HOME="https://qwirkle-masa.onrender.com/";
 private WebView web; private LinearLayout error; private FrameLayout frame; private ProgressBar progress; private boolean loadFailed=false;
 private boolean trusted(Uri uri){return "https".equals(uri.getScheme()) && "qwirkle-masa.onrender.com".equals(uri.getHost()) && (uri.getPort()==-1||uri.getPort()==443);}
 @Override public void onCreate(Bundle state){super.onCreate(state);
  frame=new FrameLayout(this);frame.setBackgroundColor(Color.rgb(241,238,251));setContentView(frame);
  frame.setOnApplyWindowInsetsListener((v,insets)->{if(android.os.Build.VERSION.SDK_INT>=30){android.graphics.Insets bars=insets.getInsets(WindowInsets.Type.systemBars()|WindowInsets.Type.displayCutout());v.setPadding(bars.left,bars.top,bars.right,bars.bottom);}else{v.setPadding(insets.getSystemWindowInsetLeft(),insets.getSystemWindowInsetTop(),insets.getSystemWindowInsetRight(),insets.getSystemWindowInsetBottom());}return insets;});
  web=new WebView(this);frame.addView(web,new FrameLayout.LayoutParams(-1,-1));
  WebSettings settings=web.getSettings();settings.setJavaScriptEnabled(true);settings.setDomStorageEnabled(true);settings.setAllowFileAccess(false);settings.setAllowContentAccess(false);settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);settings.setMediaPlaybackRequiresUserGesture(true);web.setBackgroundColor(Color.rgb(241,238,251));
  progress=new ProgressBar(this,null,android.R.attr.progressBarStyleHorizontal);FrameLayout.LayoutParams pp=new FrameLayout.LayoutParams(-1,6);frame.addView(progress,pp);
  error=new LinearLayout(this);error.setOrientation(LinearLayout.VERTICAL);error.setGravity(17);error.setPadding(40,40,40,40);error.setBackgroundColor(Color.rgb(241,238,251));TextView message=new TextView(this);message.setText("Masaya bağlanamadık.\nİnternet bağlantını kontrol et. Ücretsiz sunucunun uyanması biraz sürebilir.");message.setTextSize(18);message.setGravity(17);error.addView(message);Button retry=new Button(this);retry.setText("Tekrar dene");retry.setOnClickListener(v->{error.setVisibility(View.GONE);web.loadUrl(HOME);});error.addView(retry);frame.addView(error,new FrameLayout.LayoutParams(-1,-1));error.setVisibility(View.GONE);
  web.setWebChromeClient(new WebChromeClient(){@Override public void onProgressChanged(WebView view,int value){progress.setProgress(value);progress.setVisibility(value==100?View.GONE:View.VISIBLE);}});
  web.setWebViewClient(new WebViewClient(){
   @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request){Uri uri=request.getUrl();if(trusted(uri))return false;if("https".equals(uri.getScheme())){try{startActivity(new Intent(Intent.ACTION_VIEW,uri));}catch(Exception ignored){}}return true;}
   @Override public void onPageStarted(WebView view,String url,android.graphics.Bitmap favicon){loadFailed=false;error.setVisibility(View.GONE);}
   @Override public void onPageFinished(WebView view,String url){if(!loadFailed&&trusted(Uri.parse(url)))error.setVisibility(View.GONE);}
   @Override public void onReceivedError(WebView view,WebResourceRequest request,WebResourceError failure){if(request.isForMainFrame()){loadFailed=true;error.setVisibility(View.VISIBLE);}}
  });
  if(state==null||web.restoreState(state)==null)web.loadUrl(HOME);
 }
 @Override protected void onSaveInstanceState(Bundle state){web.saveState(state);super.onSaveInstanceState(state);}
 @Override public void onBackPressed(){web.evaluateJavascript("(()=>{const d=document.querySelector('dialog[open]');if(d){d.close();return 'handled'}if(document.body.dataset.view!=='home'){document.getElementById('leave').click();return 'handled'}return 'home'})()",result->{if("\"home\"".equals(result))new android.app.AlertDialog.Builder(this).setMessage("Renkio kapatılsın mı?").setNegativeButton("Oyunda kal",null).setPositiveButton("Kapat",(d,w)->finish()).show();});}
 @Override protected void onDestroy(){web.destroy();super.onDestroy();}
}

