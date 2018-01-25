package com.rn_csdn.rn.webview.events;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Event emitted when the progress value is changing;
 * Created by wangwenliang on 2018/1/25.
 */

public class ProgressEvent extends Event<ProgressEvent> {

    public static final String EVENT_NAME = "Progress";
    private final int mData;

    public ProgressEvent(int viewId, int data) {
        super(viewId);
        mData = data;
    }

    @Override
    public String getEventName() {
        return EVENT_NAME;
    }

    @Override
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        WritableMap data = Arguments.createMap();
        data.putString("progress", String.valueOf(mData));
        rctEventEmitter.receiveEvent(getViewTag(), EVENT_NAME, data);
    }
}
