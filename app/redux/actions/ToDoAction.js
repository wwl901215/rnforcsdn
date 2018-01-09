/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/8]
 *@date 2018/1/8
 *@description
 */
export const toDo = (status) => {
    return {
        type: 'ADD',
        data: status
    }
}