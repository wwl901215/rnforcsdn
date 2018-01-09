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

export default class Home extends BasePage {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props){
        super(props);
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
                    this.props.navigation.navigate('DrawerOpen')
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