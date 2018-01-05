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
import HomeThirdPage from '../pages/HomeThirdPage';
import HomeFourPage from '../pages/HomeFourPage';
import Tab from './HomeTabNavigator';
import Route from './Route';
import * as Global from './Global';


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
        },
        HomeThirdPage: {
            screen: HomeThirdPage,
            headerMode: 'none',
            navigationOptions: {
                headerTitle: 'HomeThirdPage',
            }
        },
        HomeFourPage: {
            screen: HomeFourPage,
            headerMode: 'none',
            navigationOptions: {
                headerTitle: 'HomeFourPage',
            }
        },
    }, {
        mode: 'card',//card默认，modal ios从底部弹出页面，android无效
        headerMode: 'float',//float默认 header先出现，screen header随screen一起出现
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: false,//是否允许侧滑或下滑翻页
        }),
    }
);
const defaultGetStateAction = RootNavigator.router.getStateForAction;
export default class Main extends React.Component {
    constructor(props){
        super(props);
        RootNavigator.router.getStateForAction = (action, state) => {
            state && action.type;//这里可以监听页面跳转时的state 和 action
            state && (Route.routes = state.routes);
            return defaultGetStateAction(action, state);
        };
    }
    //this prop will get passed to the screen components as this.props.screenProps
    render() {
        return (
            <RootNavigator screenProps={{fromRootApp: "全局传递的属性"}}/>
        )
    }
}

