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
import BasePage from '../../base/BasePage';
const SCREEN_W = Dimensions.get('window').width;
const SCREEN_H = Dimensions.get('window').height - (Platform.OS === 'android' ? StatusBar.currentHeight + 40 : 40 + 34 + 10);//iphonex需要加上这个34（底部高度），40是顶部导航栏高度
export default class TwoScreenView extends BasePage {
    constructor(props) {
        super(props);
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: this._handleMoveShouldSetPanResponderCapture.bind(this),
            onStartShouldSetResponderCapture: () => {
                return true
            },
            onPanResponderMove: this._handlePanResponderMove.bind(this),
            onPanResponderRelease: this._handlePanResponderEnd.bind(this),
        });
        this._panResponder2 = PanResponder.create({
            onMoveShouldSetPanResponderCapture: this._handleMoveShouldSetPanResponderCapture2.bind(this),
            onStartShouldSetResponderCapture: () => {
                return true
            },
            onPanResponderMove: this._handlePanResponderMove2.bind(this),
            onPanResponderRelease: this._handlePanResponderEnd2.bind(this),
        });
        this._aniBack = new Animated.Value(0);
        this._reachEnd1 = false;
        this._reachTop2 = true;
    }

    _handleMoveShouldSetPanResponderCapture(event: Object, gestureState: Object,): boolean {
        return this._reachEnd1 && gestureState.dy < 0;
    }

    _handlePanResponderMove(event: Object, gestureState: Object): void {
        if (gestureState.dy < 0 && this._aniBack) {
            this.topScreen.setNativeProps({
                marginTop: gestureState.dy,
            });
        }
    }

    _handlePanResponderEnd(event: Object, gestureState: Object): void {
        if (this._reachEnd1) {//如果到达底部
            if (gestureState.dy < 0) {
                Animated.timing(this._aniBack, {
                    toValue: 1,
                    duration: 500,
                }).start();
            } else {
                this._reachEnd1 = false;
            }
        }

        this.topScreen.setNativeProps({
            marginTop: 0,
        });
    }


    _handleMoveShouldSetPanResponderCapture2(event: Object, gestureState: Object,): boolean {
        console.log("MoveCapture:" + JSON.stringify(gestureState));
        return this._reachTop2 && gestureState.dy > 0;
    }

    _handlePanResponderMove2(event: Object, gestureState: Object): void {
        console.log("move---:" + gestureState.dy);
        if (gestureState.dy > 0 && this._reachTop2) {
            this.bottomScreen.setNativeProps({
                marginTop: gestureState.dy,
            });
        }
    }

    _handlePanResponderEnd2(event: Object, gestureState: Object): void {
        console.log("RespondeEnd:" + JSON.stringify(gestureState));
        if (this._reachTop2) {
            if (gestureState.dy > 0) {
                Animated.timing(this._aniBack, {
                    toValue: 0,
                    duration: 500,
                }).start();
            } else {
                this._reachTop2 = false;
            }
        }
        this.bottomScreen.setNativeProps({
            marginTop: 0,
        });
    }

    render() {
        console.log("render-----------")
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[styles._container1, {
                        marginTop: this._aniBack.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -SCREEN_H]
                        }),
                    }]}
                    {...this._panResponder.panHandlers}
                >
                    <View
                        ref={(ref) => this.topScreen = ref}
                        style={{
                            width: SCREEN_W, height: SCREEN_H,
                        }}
                    >

                        <ScrollView
                            ref={(ref) => this._scroll1 = ref}
                            bounces={false}
                            scrollEventThrottle={10}
                            onScroll={this._onScroll.bind(this)}
                            overScrollMode={'never'}
                        >
                            {this.props.renderTopContent()}
                            <View
                                style={{
                                    width: SCREEN_W,
                                    height: 50,
                                    backgroundColor: 'white',
                                    alignItems: 'center',
                                    // justifyContent: 'center',
                                    paddingTop: 15,
                                }}>
                                <Text>上拉查看详情</Text>
                            </View>
                        </ScrollView>
                    </View>
                </Animated.View>
                <View
                    {...this._panResponder2.panHandlers}
                    style={styles.bottomView}>
                    <View
                        ref={(ref) => this.bottomScreen = ref}
                    >
                        <View
                            style={{
                                width: SCREEN_W,
                                height: 50,
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: -50,
                            }}>
                            <Text>下拉查看顶部页面</Text>
                        </View>

                        <ScrollView
                            ref={(ref) => this._scroll2 = ref}
                            bounces={false}
                            scrollEventThrottle={10}
                            onScroll={this._onScroll2.bind(this)}
                            overScrollMode={'never'}
                        >
                            {this.props.renderBottomContent()}
                        </ScrollView>
                    </View>

                </View>
            </View>
        );
    }

    _onScroll(event) {
        this._reachEnd1 = false;
        let y = event.nativeEvent.contentOffset.y;
        let height = event.nativeEvent.layoutMeasurement.height;
        let contentHeight = event.nativeEvent.contentSize.height;
        if (contentHeight > height && (y + height >= contentHeight)) {
            this._reachEnd1 = true;
        }
    }

    _onScroll2(event) {
        this._reachTop2 = false;
        let y = event.nativeEvent.contentOffset.y;
        console.log("scroll Y:" + y);
        if (y <= 0) {
            this._reachTop2 = true;
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5FCFF',
    },
    _container1: {
        width: SCREEN_W,
        height: SCREEN_H,
        backgroundColor: 'red',
        zIndex: 1,
    },
    bottomView: {
        width: SCREEN_W,
        height: SCREEN_H,
        backgroundColor: 'blue',
    }

});