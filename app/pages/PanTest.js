/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/16]
 *@date 2018/1/16
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
    Animated
} from 'react-native';
import BasePage from '../base/BasePage';
import * as Navigator from '../scens/Navigator';
import PanCommont from '../commont/pan/PanCommont';

export default class PanTest extends BasePage {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <PanCommont
                    renderItem={(item, index) => {
                        return (
                            <View key={index} style={{
                                width: 200,
                                height: 100,
                                backgroundColor: index % 2 == 0 ? 'green' : 'red',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin:10
                            }}>
                                <Text>{item.name}</Text>
                            </View>
                        );
                    }}
                    data={[{name: "小明", age: 1}, {name: "小王", age: 2}, {name: "小刘", age: 3}, {name: "小赵", age: 4}]}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    }
});