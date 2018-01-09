/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/8]
 *@date 2018/1/8
 *@description
 */

/**
 * 普通的同步操作模型
 * @param status
 * @returns {{type: string, data: *}}
 */
export const toDo = (status) => {
    return {
        type: 'ADD',
        data: status
    }
}

/**
 * 异步通知模型
 * @param status
 * @returns {function(*, *=)}
 */
export const asyncToDo = (status) => {
    return (dispatch, getState) => {
        /**
         * 1、这里的getState()得到的是整个app的state对象；
         * 2、getState && !getState().ToDoReducer.show 目的是为了防止用户多次重复点击，造成多次网络请求
         */
        if (getState && !getState().ToDoReducer.show) {
            dispatch({
                type: "LOADING",
                show: true,
            });

            setTimeout(() => {//模拟网络请求
                dispatch({
                    type: 'LOADING',
                    show: false,
                });
                dispatch({
                    type: 'ADD',
                    data: status,
                })
            }, 5000);
        }
    }
}