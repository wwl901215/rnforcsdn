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
import Route from '../scens/Route';

export default class HomeFourPage extends BasePage {
    static navigationOptions = {

    };
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Button title="返回首页" onPress={()=>{
                    console.log(JSON.stringify(Route.routes))
                    if (Route.routes.length > 1){
                        this.props.navigation.goBack(String(Route.routes[1].key));
                    }else {
                        this.props.navigation.goBack()
                    }
                }}/>
                <Button title="返回HomeSecondePage" onPress={()=>{
                    console.log(JSON.stringify(Route.routes))
                    if (Route.routes.length > 1){
                        let routeName = "HomeSecondePage";
                        let arr = Route.routes;
                        let a = (arr,index)=>{
                            arr.slice(index+1).map((item2,index2)=>{
                                if (item2.routeName === routeName) return true;
                            })
                            return false;
                        }
                        let fun = (arr)=>{
                            arr.map((item,index) => {
                                if (item.routeName === routeName){
                                    if (a(arr,index)){
                                        fun(arr.slice(index + 1))
                                    }else {
                                        return item.key;
                                    }
                                }
                            })
                            return null;
                        }
                        this.props.navigation.goBack(String(fun(arr)));
                    }else {
                        this.props.navigation.goBack()
                    }
                }}/>
                <Text>HomeFourPage</Text>
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