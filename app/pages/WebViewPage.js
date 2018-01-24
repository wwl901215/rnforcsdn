/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/24]
 *@date 2018/1/24
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
    WebView,
    Dimensions,
} from 'react-native';
import BasePage from '../base/BasePage';
const {width, height} = Dimensions.get("window");
export default class WebViewPage extends BasePage {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <WebView style={{flex:1,width:width}} source={{uri:"http://www.baidu.com/"}}/>
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