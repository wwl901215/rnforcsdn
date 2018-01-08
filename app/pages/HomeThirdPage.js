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
import {NavigationActions} from 'react-navigation';
import * as Navigator from '../scens/Navigator';

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
                    // this.props.navigation.navigate('HomeFourPage');
                    Navigator.jump(this.props,'HomeFourPage');
                }}/>
                <Button title="go to secondePage" onPress={()=>{
                    // this.props.navigation.navigate('HomeSecondePage',{paramM:"来自thirdpage的问候"});
                    Navigator.jump(this.props,'HomeSecondePage',{paramM:"来自thirdpage的问候"});
                }}/>
                <Button title="reset thirdPage" onPress={()=>{
                    Navigator.reset(this.props);
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