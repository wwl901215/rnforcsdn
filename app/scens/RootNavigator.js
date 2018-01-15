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
import Route from './Route';
import * as StackNavigatorConfig from './StackNavigatorConfig';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../redux/reducers';
import thunk from 'redux-thunk';
import {addNavigationHelpers} from 'react-navigation';
let store = createStore(reducers, applyMiddleware(thunk));//reducer就是一个fun返回一个state对象，这个state对象是整个应用所用到的对象，connect会把这个对象绑定到具体的子组件里面


const RootNavigator = StackNavigator(StackNavigatorConfig.scensConfig, StackNavigatorConfig.stackRouteConfig);
const defaultGetStateAction = RootNavigator.router.getStateForAction;
export default class Main extends React.Component {
    constructor(props) {
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
            <Provider store={store}>
                <RootNavigator screenProps={{fromRootApp: "全局传递的属性"}}/>
            </Provider>
        )
    }
}

