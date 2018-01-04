/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/4]
 *@date 2018/1/4
 *@description
 */
import React from 'react';
import {
    Image,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import CartPage from '../pages/CartPage';
import MePage from '../pages/MePage';
import Home from '../pages/Home';
import Drawer from './DrawerNavigator';
const Tab = TabNavigator(
    {
        Home: {
            screen: Drawer,
            navigationOptions: {
                tabBarLabel: "首页",//若不设置,则以key为标题
                tabBarVisible: true,//是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image
                    source={require('../imgs/tab/Icon_Home_Active_.png')}
                    style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}/>),
            },
        },
        CartPage: {
            screen: CartPage,
            navigationOptions: {
                tabBarLabel: "购物车",//若不设置,则以key为标题
                tabBarVisible: true,//是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image
                    source={require('../imgs/tab/Icon_Cart_Normal_.png')}
                    style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}/>),
            }
        },
        MePage: {
            screen: MePage,
            navigationOptions: {
                tabBarLabel: "个人中心",//若不设置,则以key为标题
                tabBarVisible: true,//是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image
                    source={require('../imgs/tab/Icon_Personal_Normal_.png')}
                    style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}/>),
            }
        }
    }, {
        tabBarPosition: 'bottom',
        animationEnabled: false,     //是否在更改标签时显示动画。
        swipeEnabled: true,          //是否允许在标签之间滑动
        lazy: true,                  //是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦
        initialRouteName: 'Home',    //设置默认的页面组件
        backBehavior: 'none',        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions: {
            inactiveTintColor: '#999',
            activeTintColor: 'red',//label和icon的前景色 活跃状态下（选中）。
            // activeBackgroundColor: 'red', //label和icon的背景色 活跃状态下（选中） 。
            showLabel: true,         //是否显示label，默认开启
            labelStyle: {fontSize: 12}, //label的样式
            style: {paddingBottom:2},  //tabbar的样式
            iconStyle: {height: 30}   //安卓,
        },
    }
);
export default Tab;