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
} from 'react-native';
import BasePage from '../base/BasePage';
import * as Navigator from '../scens/Navigator';
import * as Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';
import * as HomeClassDecotator from '../decorators/HomeClassDecotator';

@HomeClassDecotator.HomeClass
export default class Home extends BasePage {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props){
        super(props);
        this.state={
            text:"",
        }
        console.log("home constructor");
    }

    componentDidMount() {
        this.setState({
            text:"",
        })
        console.log("home didmount");
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
                <Text>{this.state.text}</Text>
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