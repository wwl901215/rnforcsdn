/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/4]
 *@date 2018/1/4
 *@description
 */
'use strict';
import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SectionList,
    StatusBar,
    FlatList,
    Image,
    Button
} from 'react-native';
import BasePage from '../base/BasePage';
import CountNumMobx from '../mobx/CountNumMobx';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';
import * as Navigator from '../scens/Navigator';
import CusVideoPlayer from '../commont/video/CusVideoPlayer';

@observer
export default class MePage extends BasePage {

    @observable count = 1;

    constructor(props){
        super(props);
        this.state={
            showVideo:false,
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Me Page for mobx</Text>
                <Text>当前值是: {CountNumMobx.timer}</Text>
                <View style={{flexDirection:'row',marginTop:30}}>
                    <TouchableOpacity onPress={() => {
                        CountNumMobx.addTimer();
                        // this.addCount();
                    }}>
                        <Text style={{color: '#000',paddingRight:20}}>增加</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        CountNumMobx.subtractTimer();
                    }}>
                        <Text style={{color: '#000',paddingRight:20}}>减少</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        CountNumMobx.resetTimer();

                    }}>
                        <Text style={{color: '#000',paddingRight:20}}>重置</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        // alert(CountNumMobx.count);
                        CountNumMobx.setValue(666);
                    }}>
                        <Text style={{color: '#000',paddingRight:20}}>count*2</Text>
                    </TouchableOpacity>
                </View>
                <Button style={{marginTop:20}} title={"跳转到webviewpage"} onPress={() => {
                    Navigator.jump(this.props,'WebViewPage');
                }}/>

                <View style={{width:200,height:200}}>
                    {this.state.showVideo ?
                        <CusVideoPlayer
                            style={{width:200,height:200}}
                            ref={(video) => {this.video = video}}
                        />
                        : null}
                </View>
                <Button title="开始" onPress={() => {this.setState({showVideo:true},() => {this.video.onStart()})}}/>
                <Button title="暂停" onPress={() => {this.video && this.video.onPause()}}/>
            </View>
        );
    }

    // @action addCount(){
    //     this.count++;
    // }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});