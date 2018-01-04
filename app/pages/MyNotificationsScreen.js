/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/4]
 *@date 2018/1/4
 *@description
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from 'react-native';



export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications标题',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../imgs/tab/Icon_Home_Active_.png')}
                style={[{tintColor: tintColor,height:20,width:20}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}