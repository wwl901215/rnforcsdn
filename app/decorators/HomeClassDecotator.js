/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/12]
 *@date 2018/1/12
 *@description
 */

/**
 * 绑定Home类
 * @param target Home对象
 * @constructor
 */
export function HomeClass(target) {
    console.log("home HomeClass");//不会被执行
    target.prototype.say = function (message) {
        alert(message);
    }
}

/**
 * 绑定方法
 *
 *
 * @param target
 * @param funName 方法名字
 * @param descriptor 属性描述器
 * @constructor
 */
export function HomeFunCountStars(target, funName, descriptor) {
    let oldValue = descriptor.value;
    descriptor.value = function () {
        let beginTime = new Date();
        console.log("开始前")
        let result = oldValue.apply(null,arguments);
        console.log("结束后")
        let endTime = new Date();
        let wasteTime = endTime.getTime() - beginTime.getTime();
        console.log(`执行方法${funName}花了${wasteTime}ms`,arguments,result);
        return result;
    }
}