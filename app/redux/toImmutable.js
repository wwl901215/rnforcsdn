/**
 *将js对象转化为Immutable对象
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/10]
 *@date 2018/1/10
 *@description
 */
"use strict";
import {Map, List, fromJS} from 'immutable';
export default (state,handler) => {
    switch (Object.prototype.toString.call(state).toLowerCase()) {
        // case `[object object]`:
        //     return handler ? handler(Map(state)) : {...state};
        // case `[object array]`:
        //     return handler ? handler(List(state)) : {...state};

        case `[object object]`:
            return handler ? handler(fromJS(state)) : {...state};
        case `[object array]`:
            return handler ? handler(fromJS(state)) : {...state};
        default:
            return {...state};
    }
}