/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/9]
 *@date 2018/1/9
 *@description
 */
import RequestUrl from '../../utis/RequestUrl';

export const getGoods = (status) => {
    return (dispatch, getState) => {

        if (getState && !getState().NetReducer.show) {
            dispatch({
                type: "LOADING",
                show: true,
            });

            RequestUrl("https://m1.ocj.com.cn:443/api/items/items/appdetail/"+status.itemcode,
                "GET",
                null,
                (response) => {
                dispatch({
                    type: 'LOADING',//type必须唯一，dispatch是发给全局reducer的
                    show: false,
                });
                dispatch({
                    type: 'GOODS',
                    data: response,
                })
            },
                (err) => {
                dispatch({
                    type: 'LOADING',
                    show: false,
                });
            });
        }
    }
}