/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import RootNavigator from './app/scens/RootNavigator';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './app/redux/reducers/reducers';
import thunk from 'redux-thunk';

let store = createStore(reducers,applyMiddleware(thunk));//reducer就是一个fun返回一个state对象，这个state对象是整个应用所用到的对象，connect会把这个对象绑定到具体的子组件里面

//************************store的介绍**********************
let {getState,dispatch,subscribe} = store;

let unsubscribe = subscribe(()=>{
    console.log("这里可以监听全局的state:"+JSON.stringify(getState()));
});
setTimeout(()=>{
    unsubscribe();//调用该方法就可以解除监听
},5000);


/**
 * provider通过store把state传递到子组件
 */
export default ()=>(
    <Provider store={store} >
        <RootNavigator/>
    </Provider>
);
