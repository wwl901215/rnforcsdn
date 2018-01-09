/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/9]
 *@date 2018/1/9
 *@description
 */
const defaultState = {
    show:false,
    data:null,
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GOODS':
            return action.data;//前面加一个空对象是为了创建一个新对象，不然state不会改变
        case 'LOADING':
            return {...state, show: action.show};
        default:
            return state;
    }
}