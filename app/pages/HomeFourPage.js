/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/5]
 *@date 2018/1/5
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

export default class HomeFourPage extends BasePage {
    static navigationOptions = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="返回首页" onPress={() => {
                    Navigator.backToHome(this.props);
                }}/>
                <Button title="返回HomeSecondePage" onPress={() => {
                    Navigator.popTo(this.props, "HomeSecondePage");
                }}/>
                <Text>HomeFourPage</Text>
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