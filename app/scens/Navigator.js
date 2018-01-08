/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/8]
 *@date 2018/1/8
 *@description
 */
import {NavigationActions} from 'react-navigation';
import Route from './Route';

export function popTo(props, routeName) {
    if (Route.routes.length > 1) {
        let arr = Route.routes;
        let a = (arr, index) => {
            let isTrue = false;
            arr.slice(index + 1).map((item2, index2) => {
                if (item2.routeName === routeName) {
                    isTrue = true;
                }
                ;
            })
            return isTrue;
        }
        let fun = (arr) => {
            let key = null;
            arr.map((item, index) => {
                if (item.routeName === routeName) {
                    if (a(arr, index)) {
                        key = fun(arr.slice(index + 1));
                    } else {
                        key = item.key;
                    }
                }
            })
            return key;
        }
        let backToKey = fun(arr);
        let key = (backToKey, arr) => {
            let backKey = null;
            arr.forEach((item, index, arr) => {
                if (backToKey && item.key === backToKey) {
                    if (arr.length > (index + 1)) {
                        backKey = arr[index + 1].key;
                    }
                }
            });
            return backKey;
        }
        props.navigation.goBack(String(key(backToKey, arr)));
    } else {
        props.navigation.goBack()
    }
}

export function refresh(props, data = {}) {
    props.navigation.setParams(data);
}

export function jump(props, key = null, data = {}) {
    props.navigation.navigate(key, data);
}

export function backToHome(props) {
    if (Route.routes.length > 1) {
        props.navigation.goBack(String(Route.routes[1].key));
    } else {
        props.navigation.goBack();
    }
}

export function pop(props, key = null) {
    props.navigation.goBack(null);
}

/**
 * 无法及时获取当前state中的routes，有待优化
 * @param props
 */
export function reset(props) {

    let nav = function () {
        let data = Route.routes;
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            let {key,routeName,params} = data[i];
            arr.push(NavigationActions.navigate({routeName:routeName,params:params}));
        }
        return arr;
    }

    nav();

    const action = NavigationActions.reset({
        index: Route.routes.length - 1,
        actions: nav(),
    })
    props.navigation.dispatch(action);
}