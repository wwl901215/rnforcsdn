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
import TwoScreenView from '../commont/TwoScreenView/TwoScreenView';
export default class ScrollPage extends BasePage {

    render() {
        return (
            <View style={styles.container}>
                <TwoScreenView
                    renderTopContent={() => {
                        return (
                            <View>
                                {this._getContent()}
                            </View>
                        )
                    }}
                    renderBottomContent={() => {
                        return (
                            <View>
                                {this._getContent()}
                            </View>
                        )
                    }}
                />
            </View>
        );
    }

    _getContent() {
        let contents = [];
        for (let i = 0; i < 50; i++) {
            contents.push(
                <Text style={{color: '#fff', marginTop: 10}} key={'item' + i}>content-->{i}</Text>
            );
        }
        return contents;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5FCFF',
    }
});