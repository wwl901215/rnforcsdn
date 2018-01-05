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

export default class HomeThirdPage extends BasePage {
    static navigationOptions = {

    };
    constructor(props){
        super(props);
        console.log("home3-cons:"+JSON.stringify(this.props));
    }
    render(){
        console.log("home3-render:"+JSON.stringify(this.props));
        return(
            <View style={styles.container}>
                <Button title="go to fourPage" onPress={()=>{
                    this.props.navigation.navigate('HomeFourPage');
                }}/>
                <Text>HomeThirdPage</Text>
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