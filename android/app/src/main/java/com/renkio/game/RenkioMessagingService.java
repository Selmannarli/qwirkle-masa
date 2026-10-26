package com.renkio.game;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
public final class RenkioMessagingService extends FirebaseMessagingService {
 @Override public void onNewToken(String token){getSharedPreferences("push",MODE_PRIVATE).edit().putString("token",token).apply();}
 @Override public void onMessageReceived(RemoteMessage message){if(!getSharedPreferences("push",MODE_PRIVATE).getBoolean("enabled",false))return;if(!RenkioApplication.foreground||"invite".equals(message.getData().get("type")))RenkioNotifications.show(this,message.getData());}
}
