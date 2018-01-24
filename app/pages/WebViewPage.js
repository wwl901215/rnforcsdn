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
    Platform,
    Slider,
} from 'react-native';
import BasePage from '../base/BasePage';
import CusWebView from '../commont/webview/CusWebView';

const {width, height} = Dimensions.get("window");
export default class WebViewPage extends BasePage {

    constructor(props) {
        super(props);
        this.state = {
            value:0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' ? (
                    <WebView style={{flex: 1, width: width}} source={{uri: "http://www.baidu.com/"}}/>
                ) : (
                    <View style={{flex:1,marginTop:10}}>
                        <Slider style={{width: width}} value={this.state.value}/>
                        <CusWebView style={{flex:1,width:width}} source={{uri: "http://www.baidu.com/"}}/>
                    </View>
                )}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});