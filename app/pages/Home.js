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
    Button,
    CameraRoll,
    Linking,
    DeviceEventEmitter,
    Platform
} from 'react-native';
import BasePage from '../base/BasePage';
import * as Navigator from '../scens/Navigator';
import * as Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';
import * as HomeClassDecotator from '../decorators/HomeClassDecotator';
import ImageShow from './imagepicker/ImageShow';
import RNConnect from '../bridge/RNConnect';
import {AndroidRouterModule} from '../bridge/AndroidModules';

@HomeClassDecotator.HomeClass
export default class Home extends BasePage {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props){
        super(props);
        this.state={
            text:"",
            url:"suhei",
            show:false,
        }
        console.log("home constructor");
    }

    componentDidMount() {
        this.setState({
            text:"",
        })
        console.log("home didmount");
        DeviceEventEmitter.addListener('sendMsgToRN', (event) => {//这里可以用来集中处理从native传过来的通知；
            console.log(JSON.stringify(event));
        });

        if (Platform.OS === 'android') {
            AndroidRouterModule.showJSView();
        }

    }


    @HomeClassDecotator.HomeFunCountStars
    countStars(num){
        for (let i = 0; i < num; i++){
            console.log(`第${i}个星星`);
        }
        return "方法返回的内容";
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Home Page</Text>
                <Button title="go to homesecondepage" onPress={()=>{
                    // this.props.navigation.navigate('HomeSecondePage',{paramM:"来自首页的问候"});
                    Navigator.jump(this.props,'HomeSecondePage',{paramM:"来自首页的问候"});
                }}/>
                <Button title="打开侧滑菜单a" onPress={()=>{
                    this.props.navigation.navigate('DrawerOpen');
                }}/>

                <Button title="测试" onPress={()=>{
                    // this.say("测试decotator");
                    this.countStars(100);
                }}/>
                <Button title="打开原生页面并回调" onPress={()=>{
                    RNConnect.pushs({page:"Home",name:"ixaoming"},(event) => {
                        alert(JSON.stringify(event));
                        console.log("aaaaa" + JSON.stringify(event));
                    });
                }}/>
                <Button title="直接调用java代码" onPress={()=>{
                    RNConnect.getLocationFromAndroid((msg) => {
                       alert(msg);
                    });
                }}/>
                <Button title="打开浏览器" onPress={()=>{
                    Linking.openURL("http://www.baidu.com");
                }}/>
                <Button title="跳转PanTest" onPress={()=>{
                    Navigator.jump(this.props,'PanTest');
                }}/>
                <Button title="获取手机本地图片" onPress={()=>{
                    this.setState({show:true});
                }}/>
                <Text>{this.state.text}</Text>
                <Image style={{height:200,width:200}} resizeMode={"contain"} source={{uri:this.state.url}}/>
                <ImageShow show={this.state.show} getImages={(imageUrl) => {
                    this.setState({url:imageUrl});
                }}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }
});