/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/4]
 *@date 2018/1/4
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
} from 'react-native';
import BasePage from '../base/BasePage';

export default class HomeSecondePage extends BasePage {
    static navigationOptions = {

    };
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>HomeSecondePage</Text>
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