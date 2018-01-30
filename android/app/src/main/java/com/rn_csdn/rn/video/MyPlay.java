package com.rn_csdn.rn.video;

import android.content.Context;
import android.media.MediaPlayer;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

/**http://blog.csdn.net/Zhang_junhui/article/details/75647500
 * Created by wangwenliang on 2018/1/30.
 */

public class MyPlay extends SurfaceView implements SurfaceHolder.Callback {
    private MediaPlayer player = new MediaPlayer();
    String uri = "http://www.w3school.com.cn/example/html5/mov_bbb.mp4";
    public MyPlay(Context context) {
        super(context);
    }

    @Override
    public void surfaceCreated(SurfaceHolder surfaceHolder) {

    }

    @Override
    public void surfaceChanged(SurfaceHolder surfaceHolder, int i, int i1, int i2) {

    }

    @Override
    public void surfaceDestroyed(SurfaceHolder surfaceHolder) {

    }
}
