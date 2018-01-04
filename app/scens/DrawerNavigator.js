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
import MyNotificationsScreen from '../pages/MyNotificationsScreen';

const Drawer = DrawerNavigator(
    {
        HomePage: {
            screen:Home,
            navigationOptions: {
                drawerLabel:'设置',
                headerTitle:'首页',
                drawerIcon:({tintColor}) => (<Image
                    source={require('../imgs/tab/Icon_Home_Active_.png')}
                    style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}/>),
            },
        },
        Notifications: {
            screen: MyNotificationsScreen,
        },
        Notifications2: {
            screen: MyNotificationsScreen,
        },
    },
    {
        // https://github.com/react-navigation/react-navigation/issues/3148#issuecomment-352778884
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',

        drawerWidth: 200, //抽屉的宽度
        drawerPosition: 'left' ,  //选项是left和right.默认是left
        // contentComponent:(navigation)=><Text>asa</Text>,
        contentOptions: {
            activeTintColor: '#e91e63',
            itemsContainerStyle: {
                marginVertical: 0,
            },
            iconContainerStyle: {
                opacity: 1
            },
        }
    }

);

export default Drawer;