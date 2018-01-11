/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/8]
 *@date 2018/1/8
 *@description
 */
import toImmutable from '../toImmutable';
import {Map, List} from 'immutable';
const defaultState = {
    num: 0,
    allNum: 0,
    show: false,
    obj:{a:{b:{c:111},b1:555}}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        // case 'ADD':
        //     return Object.assign({},state, {num: action.data.num, allNum: action.data.num + state.allNum});//前面加一个空对象是为了创建一个新对象，不然state不会改变

        case 'ADD':
            return toImmutable(state, (state) => {
                return state.update('allNum', oldData => {
                    return oldData + action.data.num;
                }).update('num',oldData => {
                    return oldData + action.data.num;
                }).update('obj', oldData => {
                    // return Map(oldData).
                    //             update('a', b => Map(b).
                    //                 update('b', c => ({c:666})));
                    // return Map(oldData).
                    //             update('a', b => Map(b).
                    //                 update('b', c => Map(c).
                    //                     update('c', c => 666)));
                    return Map(oldData).updateIn(['a','b'], c => Map({c:666}))//updateIn使用时对象的内部必须也是immutable的对象
                }).toJS();
            })
        case 'LOADING':
            return {...state, show: action.show};
        default:
            return state;
    }
}