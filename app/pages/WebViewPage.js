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
    Button,
} from 'react-native';
import BasePage from '../base/BasePage';
import CusWebView from '../commont/webview/CusWebView';
import * as Navigator from '../scens/Navigator';

const {width, height} = Dimensions.get("window");
export default class WebViewPage extends BasePage {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' ? (
                    <WebView style={{flex: 1, width: width}} source={{uri: "http://www.baidu.com/"}}/>
                ) : (
                    <View style={{flex: 1, marginTop: 10}}>
                        <Button title="跳转到下一个webview" onPress={() => {
                            Navigator.jump(this.props,'WebViewPage');
                        }}/>
                        <Slider style={{width: width}} value={this.state.value}/>
                        <CusWebView
                            rnToNativeMessage={"来自rn的数据"}
                            onProgress={(data) => {
                            this.setState({value: Number(data) / 100});
                        }} style={{flex: 1, width: width}} source={{uri: "http://www.baidu.com/"}}/>
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