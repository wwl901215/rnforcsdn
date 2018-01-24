package com.rn_csdn.rn;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.rn_csdn.HomeActivity;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by wangwenliang on 2018/1/23.
 */

public class RouterModule extends ReactContextBaseJavaModule {
    private static ReactContext reactContext;
    public static Promise callback;
    JSONObject obj;

    public RouterModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "AndroidRouterModule";
    }

    public static void activitCallBack(){
        JSONObject params = new JSONObject();
        try {
            params.putOpt("native","来自activit的问候");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        if (callback != null){
            try {
                callback.resolve(params.toString());
            }catch (Exception e){
                callback.reject(e.getMessage(), e);
            }
        }

    }

    @ReactMethod
    public void getLocation(Callback callback){
        callback.invoke("这个是js及时调用android的方法");
    }

    @ReactMethod
    public void showJSView() {
        getCurrentActivity().sendBroadcast(new Intent("com.can.showJSView"));
    }

    @ReactMethod
    public void startAndroidActivity(String data, Promise callback) {//这里的promise是异步回调，不是什么时候，只要callback还没有被销毁就可以通过callback.resolve()和.reject()回调js;
        this.callback = callback;
        try {
            obj = new JSONObject(data);
        } catch (JSONException e) {
            callback.reject(e.getMessage(),e);
        }
        switch (obj.optString("page")) {
            case "Home":
                Activity activity = getCurrentActivity();
                Intent intent = new Intent(activity, HomeActivity.class);
                activity.startActivity(intent);
                break;
        }
    }

    public static void sendMsgToRN(){
        WritableMap map = Arguments.createMap();
        map.putString("name","wang");
        map.putString("age","28");
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("sendMsgToRN",map);
    }

}
