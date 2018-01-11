/**
 * 讲解combineReducers
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/8]
 *@date 2018/1/8
 *@description
 */
import {combineReducers} from 'redux';
import ToDoReducer from './reducers/ToDoReducer';
import NetReducer from './reducers/NetReducer';

/**
 *
 * @param state 储存了整个应用的state
 * @param action 用户发出的action
 * @returns {{ToDoReducer: {num, allNum}}}
 */
// export default (state={},action) => {
//     return {
//         ToDoReducer: ToDoReducer(state.ToDoReducer,action),
//     }
// };

//************************等同于combinReducers**********************
export default combineReducers({
    ToDoReducer,
    NetReducer,
})