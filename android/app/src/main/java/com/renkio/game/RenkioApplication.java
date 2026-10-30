package com.renkio.game;
import android.app.Application;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
public final class RenkioApplication extends Application {
 public static volatile boolean foreground=false;
 @Override public void onCreate(){super.onCreate();android.content.SharedPreferences prefs=getSharedPreferences("push",MODE_PRIVATE);if(!"renkio".equals(prefs.getString("project","")))prefs.edit().remove("token").putString("project","renkio").apply();if(FirebaseApp.getApps(this).isEmpty())FirebaseApp.initializeApp(this,new FirebaseOptions.Builder().setProjectId("renkio").setApplicationId("1:29242429689:android:fba8bc5e84e03f6f479228").setGcmSenderId("29242429689").setApiKey("AIzaSyCQxPBr9HXHKvcmWbsiyBhgawUE_1IjxEo").build());}
}
