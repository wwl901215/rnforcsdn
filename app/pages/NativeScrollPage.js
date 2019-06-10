/**
 * @Date: 2019/6/10
 * @Author: wangwenliang
 * @Email: wenliang.wang.o@nio.com
 **/
import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import BasePage from '../base/BasePage';
import TwoScreenView from '../commont/TwoScreenView/TwoScreenView';
export default class NativeScrollPage extends BasePage {

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#F5FCFF',
    }
});