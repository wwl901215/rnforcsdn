/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import RootNavigator from './app/scens/RootNavigator';
import React from 'react';

/**
 * provider通过store把state传递到子组件
 */
export default () => (<RootNavigator/>);
