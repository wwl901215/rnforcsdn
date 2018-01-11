/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/4]
 *@date 2018/1/4
 *@description
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SectionList,
    StatusBar,
    FlatList,
    Image,
    Button,
} from 'react-native';
import BasePage from '../base/BasePage';
import * as Navigator from '../scens/Navigator';
import * as Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';

export default class Home extends BasePage {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props){
        super(props);
        this.state={
            text:"",
        }
    }

    componentDidMount() {

        //1、fromJS(); 将JS对象和数组转换为不可变Map和List
        let map = Immutable.fromJS({a:"map1"});
        let map2 = map.set("b",3);
        map.get("a");
        let map3 = Immutable.fromJS({a:"map1"})

        let list = Immutable.fromJS([1,2,3,4]);
        let list2 = list.push(5);
        let list3 = list.pop();
        list.get(1);

        //2、is() 比较两个Immutable是否一样
        Immutable.is(map,map3);

        //3、Cursor提供了可以直接访问深层数据
        let data = Immutable.fromJS({a:{b:{c:6},b1:555}});
        let cur = Cursor.from(data,["a","b"],newData => {
            //当cur或其子 cur执行update时调用,newData是data的最新数据

        });
        cur.get('c');//6
        cur = cur.update('c', x => x+1);
        cur.get('c');//7


        this.setState({
            text:JSON.stringify(data.updateIn(['a','b'], c => {return{c:666}})
                .toJS()),
        })

        //4、批量修改
        //由于每一次修改都会生成一个新的immutable对象有一定的性能损耗，可以使用withMutations方法，使批量修复在临时集合拷贝上发生
        // 只有特殊的几个方法能使用 withMutation 其中包括 set, push 和 pop

        //5、isImmutable() 判断是否为Immutable对象
//         console.log('---> isImmutable([]) ' + isImmutable([]));
//         console.log('---> isImmutable({}) ' + isImmutable({}));
//         console.log('---> isImmutable(Map()) ' + isImmutable(Map()));
//         console.log('---> isImmutable(List()) ' + isImmutable(List()));
//
// //结果
//         ---> isImmutable([]) false
//         ---> isImmutable({}) false
//         ---> isImmutable(Map()) true
//         ---> isImmutable(List()) true

    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Home Page</Text>
                <Button title="go to homesecondepage" onPress={()=>{
                    // this.props.navigation.navigate('HomeSecondePage',{paramM:"来自首页的问候"});
                    Navigator.jump(this.props,'HomeSecondePage',{paramM:"来自首页的问候"});
                }}/>
                <Button title="打开侧滑菜单a" onPress={()=>{
                    this.props.navigation.navigate('DrawerOpen');
                }}/>

                <Text>{this.state.text}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }
});