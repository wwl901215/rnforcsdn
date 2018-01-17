/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/17]
 *@date 2018/1/17
 *@description
 */
'use strict';
import React, {Component} from 'react';
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
    PanResponder,
    Animated,
    Dimensions
} from 'react-native';
import BasePage from '../../base/BasePage';
import * as Navigator from '../../scens/Navigator';
let widthD = Dimensions.get('window').width;
let heightD = Dimensions.get('window').height;

export default class PanCommont extends BasePage {

    constructor(props) {
        super(props);
        this.state={
            layoutWidth:widthD,
        }
        this.location = 0;
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
            onPanResponderGrant: this._handlePanResponderGrant.bind(this),
            onPanResponderMove: this._handlePanResponderMove.bind(this),
            onPanResponderRelease: this._handlePanResponderEnd.bind(this),
            onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
        });
    }

    _handleStartShouldSetPanResponder(event, gestureState) {
        return true;
    }

    _handleMoveShouldSetPanResponder(event, gestureState) {
        return true;
    }

    _handlePanResponderGrant(event, gestureState) {//开始

    }

    _handlePanResponderMove = (event, gestureState) => {//移动中
        this.moveView.setNativeProps({
            style: {
                marginLeft: this.location + gestureState.dx,
            }
        });
        console.log('paddingLeft:'+(this.location + gestureState.dx));
        let zWidth = this.location+ gestureState.dx + this.state.layoutWidth;
        if (zWidth<widthD){//反向滑动
            this.location = widthD;
            this.moveView.setNativeProps({
                style: {
                    marginLeft: this.state.layoutWidth - widthD,
                }
            });
        }else if (zWidth > this.state.layoutWidth){//正向滑动
            this.location = 0;
            this.moveView.setNativeProps({
                style: {
                    marginLeft: -this.state.layoutWidth,
                }
            });
        }
    }

    _handlePanResponderEnd(event, gestureState) {//释放
        this.location += gestureState.dx;
    }


    render() {
        return (
            <View style={{width:widthD,alignItems:'flex-start',backgroundColor: '#fffff9'}}>
                <View {...this._panResponder.panHandlers}
                      ref={(ref) => {
                          this.moveView = ref
                      }}
                      onLayout={(event)=>{
                          let width = event.nativeEvent.layout.width;
                          this.setState({layoutWidth:width});
                          console.log("layout:" + width);
                      }}
                      style={[styles.container, {flexDirection: 'row'}]}>
                    {(this.props.data && this.props.data.length > 0) ? this.props.data.map((item, index) => {
                        return (
                            this.props.renderItem(item, index)
                        );
                    }) : null}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fffff9',
        overflow:'hidden',
        // width:widthD,
        // height:heightD,
    }
});