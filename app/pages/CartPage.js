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

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Cart Page</Text>
                <Text>allNum:{this.props.allNum}</Text>
                <Button title={'加1'} onPress={() => {
                    // this.props.add(1);
                    this.props.asyAdd(2);
                }}/>
                {this.props.show ?
                    <Text>正在加载。。。</Text>
                    :
                    <Text>加载完毕</Text>
                }
            </View>
        );
    }
}

export default connect(
    (state) => ({
        allNum: state.ToDoReducer.allNum,
        show: state.ToDoReducer.show,
    }),
    (dispatch) => ({
        add: (msg) => dispatch(ToDoAction.toDo({num: msg || 1, allNum: 100})),
        asyAdd: (msg) => dispatch(ToDoAction.asyncToDo({num: msg})),
    })
)(CartPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});