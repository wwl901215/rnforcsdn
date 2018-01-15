/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/15]
 *@date 2018/1/15
 *@description
 */
import {observable, autorun, computed, action, useStrict, comparer} from 'mobx';

useStrict(true);

class CountNumMobx {
    @observable timer = 0;

    constructor(props) {
        //计算属性——computed
        this.plus = computed(() => comparer.identity(this.timer, 0));//判断this.timer是否===0 返回 true/false
        /**
         * 当观测到的数据发生变化的时候，如果变化的值处在autorun中，那么autorun就会自动执行。
         * 每当this.plus变化的时候会调用
         * 1->∝的时候 始终为flase 所以 不会触发, -1->∝同理 ,只有在 -1 0 1 之间改变时才会触发this.plus的变化 所以会有toast弹出
         */
        autorun(() => {
            // alert(this.plus);
        })
    }

    //计算 适用于购物车, 商品数量乘以单价
    @computed
    get count() {
        return this.timer * 2
    }

    set setValue(value) { //不知道为什么这个不管用，需要关注
        this.timer = value;
    }

    // 重置计数器
    @action('重置计数器')
    resetTimer() {
        this.timer = 0;
    }

    @action('增加')
    addTimer() {
        this.timer++
    };

    @action('减少')
    subtractTimer() {
        this.timer--
    }
}

const aaa = new CountNumMobx();

export default aaa;