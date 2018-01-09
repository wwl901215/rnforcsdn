/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/8]
 *@date 2018/1/8
 *@description
 */
const defaultState = {
    num: 0,
    allNum: 0,
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return Object.assign(defaultState,{num: action.data.num, allNum: action.data.num + state.allNum});
        default:
            return state;
    }
}