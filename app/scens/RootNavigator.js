/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/4]
 *@date 2018/1/4
 *@description
 */
import React from 'react';
import {
    Text,
    View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeSecondePage from '../pages/HomeSecondePage';
import Tab from './HomeTabNavigator';


const RootNavigator = StackNavigator({
    Tab: {
        screen: Tab,
        navigationOptions: {
            // header:null,//隐藏顶部导航栏
        }
    },
    HomeSecondePage: {
        screen: HomeSecondePage,
        headerMode:'none',
        navigationOptions: {
            headerTitle: 'HomeSecondePage',
        }
    },


});

export default RootNavigator;

