/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/8]
 *@date 2018/1/8
 *@description
 */
const defaultState = {
    num: 0,
    allNum: 0,
    show: false,
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return Object.assign({},defaultState, {num: action.data.num, allNum: action.data.num + state.allNum});//前面加一个空对象是为了创建一个新对象，不然state不会改变
        case 'LOADING':
            return {...state, show: action.show};
        default:
            return state;
    }
}