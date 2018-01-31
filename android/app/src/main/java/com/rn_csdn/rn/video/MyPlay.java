package com.rn_csdn.rn.video;

import android.content.Context;
import android.media.MediaPlayer;
import android.net.Uri;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

import java.io.IOException;

/**http://blog.csdn.net/Zhang_junhui/article/details/75647500
 * Created by wangwenliang on 2018/1/30.
 */

public class MyPlay extends SurfaceView implements SurfaceHolder.Callback {
    private MediaPlayer player = new MediaPlayer();
    String uri = "http://www.w3school.com.cn/example/html5/mov_bbb.mp4";
    SurfaceHolder holder;
    public MyPlay(Context context) {
        super(context);
        try {
            player.setDataSource(context, Uri.parse(uri));
            holder = this.getHolder();
            holder.addCallback(this);
            player.prepare();
            player.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {

                @Override
                public void onPrepared(MediaPlayer mediaPlayer) {
                    player.start();
                    player.setLooping(false);
                }
            });
        }catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void onStart() {
        player.start();
    }

    public void onPause() {
        player.pause();
    }

    @Override
    public void surfaceCreated(SurfaceHolder surfaceHolder) {
        player.setDisplay(holder);
    }

    @Override
    public void surfaceChanged(SurfaceHolder surfaceHolder, int i, int i1, int i2) {

    }

    @Override
    public void surfaceDestroyed(SurfaceHolder surfaceHolder) {
        player.pause();
        player.stop();
        if (player != null) {
            player = null;
        }
    }
}
