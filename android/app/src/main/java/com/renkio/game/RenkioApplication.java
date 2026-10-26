package com.renkio.game;
import android.app.Application;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
public final class RenkioApplication extends Application {
 public static volatile boolean foreground=false;
 @Override public void onCreate(){super.onCreate();if(FirebaseApp.getApps(this).isEmpty())FirebaseApp.initializeApp(this,new FirebaseOptions.Builder().setProjectId("qwirkle-v-selman").setApplicationId("1:493668227359:android:a03ae8af9a9142053cf82a").setGcmSenderId("493668227359").setApiKey("AIzaSyDfxvt28tgv6XLsOPzc6DN010xitW4E5Jk").build());}
}
