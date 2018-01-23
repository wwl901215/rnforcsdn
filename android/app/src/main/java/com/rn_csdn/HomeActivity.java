package com.rn_csdn;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.rn_csdn.rn.RouterModule;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        Button b = (Button) findViewById(R.id.btn);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                RouterModule.sendMsgToRN();
            }
        });
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        RouterModule.activitCallBack();
    }
}
