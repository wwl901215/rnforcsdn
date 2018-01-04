/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/4]
 *@date 2018/1/4
 *@description
 */
import React from 'react';
import {
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeSecondePage from '../pages/HomeSecondePage';
import Tab from './HomeTabNavigator';


const RootNavigator = StackNavigator(
    {
        Tab: {
            screen: Tab,
            navigationOptions: {
                header: null,//隐藏顶部导航栏
            }
        },
        HomeSecondePage: {
            screen: HomeSecondePage,
            headerMode: 'none',
            navigationOptions: {
                headerTitle: 'HomeSecondePage',
            }
        }
    }, {
        mode: 'card',//card默认，modal ios从底部弹出页面，android无效
        headerMode: 'float',//float默认 header先出现，screen header随screen一起出现
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: false,//是否允许侧滑或下滑翻页
        }),
    }
);

export default class Main extends React.Component {
    //this prop will get passed to the screen components as this.props.screenProps
    render() {
        return (
            <RootNavigator screenProps={{p: "来之不易"}}/>
        )
    }
}

