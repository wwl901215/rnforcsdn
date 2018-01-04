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
import {DrawerNavigator} from 'react-navigation';
import Home from '../pages/Home';

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications标题',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('../imgs/tab/Icon_Home_Active_.png')}
                style={[{tintColor: tintColor,height:30,width:30}]}
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

const Drawer = DrawerNavigator({
    HomePage: {
        screen:Home,
        navigationOptions: {
            drawerLabel:'lsdkl',
            headerTitle:'alksd',
            drawerIcon:({tintColor}) => (<Image
                source={require('../imgs/tab/Icon_Home_Active_.png')}
                style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}/>),
        },
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },



});

export default Drawer;