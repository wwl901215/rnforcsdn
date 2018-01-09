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
    Button,
} from 'react-native';
import {connect} from 'react-redux'
import BasePage from '../base/BasePage';
import * as ToDoAction from '../redux/actions/ToDoAction';
class CartPage extends BasePage {

    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Cart Page</Text>
                <Text>allNum:{this.props.allNum}</Text>
                <Button title={'加1'} onPress={()=>{this.props.add(1)}}/>
            </View>
        );
    }
}

export default connect(
    (state) => ({
        allNum: state.ToDoReducer.allNum
    }),
    (dispatch) => ({
        add: (msg) => dispatch(ToDoAction.toDo({num:msg || 1,allNum:100})),
    })
)(CartPage);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});