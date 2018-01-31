package com.rn_csdn.rn.video;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * https://reactnative.cn/docs/0.51/native-component-android.html#content
 * Created by wangwenliang on 2018/1/30.
 */

public class ReactVideoManager extends SimpleViewManager<MyPlay> {

    public static String CLASS_NAME = "RCTVideoPlayer";
    private static final int COMMAND_PAUSE_ID = 1;
    private static final String COMMAND_PAUSE_NAME = "pause";
    private static final int COMMAND_START_ID = 2;
    private static final String COMMAND_START_NAME = "start";

    @Override
    public String getName() {
        return CLASS_NAME;
    }

    @Override
    protected MyPlay createViewInstance(ThemedReactContext reactContext) {
        MyPlay view = new MyPlay(reactContext);
        return view;
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of(
                COMMAND_PAUSE_NAME,COMMAND_PAUSE_ID,
                COMMAND_START_NAME,COMMAND_START_ID
        );
    }

    @Override
    public void receiveCommand(MyPlay root, int commandId, @Nullable ReadableArray args) {
        switch (commandId) {
            case COMMAND_PAUSE_ID:
                root.onPause();
                break;
            case COMMAND_START_ID:
                root.onStart();
                break;
            default:
                break;
        }
    }
}
