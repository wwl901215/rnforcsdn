/**
 * 公司要重构商品详情页，实现上下分页滑动效果
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/3/28]
 *@date 2018/3/28
 *@description
 */
import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    PanResponder,
    Animated,
    StatusBar,
} from 'react-native';
import BasePage from '../base/BasePage';
const SCREEN_W = Dimensions.get('window').width;
const SCREEN_H = Dimensions.get('window').height - (Platform.OS === 'android' ? StatusBar.currentHeight : 0);

export default class ScrollPage extends BasePage {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: this._handleMoveShouldSetPanResponderCapture.bind(this),
            onStartShouldSetResponderCapture:() => {return true},
            onPanResponderMove: this._handlePanResponderMove.bind(this),
            onPanResponderRelease: this._handlePanResponderEnd.bind(this),
            onPanResponderGrant:this._handlePanGrant.bind(this),
            onPanResponderTerminate:()=>{

            },
            onShouldBlockNativeResponder: (event, gestureState) => false,//表示是否用 Native 平台的事件处理，默认是禁用的，全部使用 JS 中的事件处理，注意此函数目前只能在 Android 平台上使用
        });
        this._aniBack = 0;
    }
    _handlePanGrant(event: Object, gestureState: Object,){

    }
    _handleMoveShouldSetPanResponderCapture(event: Object, gestureState: Object,): boolean {
        return true;
    }
    _handlePanResponderMove(event: Object, gestureState: Object): void {

        console.log("aniBack:"+this._aniBack);
    }
    _handlePanResponderEnd(event: Object, gestureState: Object): void {

    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[styles.topView,{
                        transform:[
                            {
                                translateY: this._aniBack,
                            }
                        ],
                    }]}
                    {...this._panResponder.panHandlers}
                >
                </Animated.View>
                <View style={styles.bottomView}>

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5FCFF',
    },
    topView: {
        width: SCREEN_W,
        height: SCREEN_H,
        backgroundColor: 'red',
    },
    bottomView: {
        width: SCREEN_W,
        height: SCREEN_H,
        backgroundColor: 'blue',
    }

});