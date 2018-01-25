package com.rn_csdn;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.view.View;

import com.rn_csdn.rn.ReactActivity2;

//http://blog.csdn.net/vv_bug/article/details/78061746
public class MainActivity extends ReactActivity2 {
    private View mRootView;
    private BroadcastReceiver mReceiver;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mRootView = getRootView();
        setContentView(mRootView);
        mRootView.setVisibility(View.INVISIBLE);
//        new Handler().postDelayed(new Runnable() {//模拟jsbundle加载过程
//            @Override
//            public void run() {
//                getWindow().setBackgroundDrawableResource(android.R.drawable.screen_background_light);
//                mRootView.setVisibility(View.VISIBLE);
//            }
//        }, 3000);

        if (mReceiver != null) {
            unregisterReceiver(mReceiver);
        }
        registerReceiver(mReceiver = new BroadcastReceiver() {//等js第一个页面加载完成后通知显示rootview；
            @Override
            public void onReceive(Context context, Intent intent) {
                mRootView.setVisibility(View.VISIBLE);
                getWindow().setBackgroundDrawableResource(android.R.drawable.screen_background_light);
            }
        }, new IntentFilter("com.can.showJSView"));
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RN_CSDN";
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mReceiver != null) {
            unregisterReceiver(mReceiver);
            mReceiver = null;
        }
    }
}
