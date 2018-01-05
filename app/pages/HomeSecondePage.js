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
    Button
} from 'react-native';
import BasePage from '../base/BasePage';
import {NavigationActions} from 'react-navigation';

export default class HomeSecondePage extends BasePage {
    static navigationOptions = {};

    constructor(props) {
        super(props);
        this.state={
            param:this.props.navigation.state.params.paramM,
        }
        console.log("home2-cons:"+JSON.stringify(this.props));
    }

    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.setParams({paramM:"改个属性这么麻烦。。。。"});
        },3000);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({param:nextProps.navigation.state.params.paramM})
    }

    render() {
        console.log("home2-render:"+JSON.stringify(this.props));
        let navigation = this.props.navigation;
        let state = navigation.state;
        let params = state.params;//通过navigate传递的属性都在这里面

        let paramM = params.paramM;
        console.log(JSON.stringify(this.props));
        // {
        //     "screenProps": {"p": "来之不易"},
        //     "navigation": {
        //         "state": {
        //             "params": {"paramM": "来自首页的问候"},
        //             "key": "id-1515144434157-2",
        //             "routeName": "HomeSecondePage"
        //         }
        //     }
        // }
        return (
            <View style={styles.container}>
                <Button style={{marginBottom: 50}}
                        title={"go to third homepage"}
                        onPress={() => {
                            const action = NavigationActions.navigate({
                                routeName: 'HomeThirdPage',
                                params: {paramM: '来自seconde home的问候'},
                                action: NavigationActions.navigate({routeName:'HomeFourPage'})
                            })
                            navigation.dispatch(action);
                        }}>
                </Button>
                <Button
                    title={"go back"}
                    style={{marginBottom: 50}}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                </Button>
                <Text>HomeSecondePage {`\r\n`}
                    paramM:{this.state.param} {`\r\n`}
                    routeName:{state.routeName}{`\r\n`}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});