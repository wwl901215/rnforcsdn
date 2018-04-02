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
    Dimensions,
    ScrollView
} from 'react-native';
import BasePage from '../base/BasePage';
import {NavigationActions} from 'react-navigation';
import * as Navigator from '../scens/Navigator';
import AndroidNativeRefresh from '../commont/RNRefreshView/AndroidNativeRefresh';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class HomeSecondePage extends BasePage {
    static navigationOptions = {};

    constructor(props) {
        super(props);
        this.state = {
            param: this.props.navigation.state.params.paramM,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            // this.props.navigation.setParams({paramM:"改个属性这么麻烦。。。。"});
            Navigator.refresh(this.props, {paramM: "改个属性这么麻烦。。。。"});
        }, 3000);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({param: nextProps.navigation.state.params.paramM})
    }

    render() {
        let navigation = this.props.navigation;
        let state = navigation.state;
        let params = state.params;//通过navigate传递的属性都在这里面

        let paramM = params.paramM;
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
                            // const action = NavigationActions.navigate({
                            //     routeName: 'HomeThirdPage',
                            //     params: {paramM: '来自seconde home的问候'},
                            //     action: NavigationActions.navigate({routeName:'HomeFourPage'}) //这个还没有弄明白干嘛的
                            // })
                            // navigation.dispatch(action);
                            Navigator.jump(this.props, 'HomeThirdPage', {paramM: '来自seconde home的问候'});
                        }}>
                </Button>
                <Button
                    title={"go back"}
                    style={{marginBottom: 50}}
                    onPress={() => {
                        // navigation.goBack();
                        Navigator.pop(this.props);
                    }}>
                </Button>
                <Button
                    title={"reset"}
                    style={{marginBottom: 50}}
                    onPress={() => {
                        // navigation.goBack();
                        Navigator.reset(this.props);
                    }}>
                </Button>
                <Text>HomeSecondePage {`\r\n`}
                    paramM:{this.state.param} {`\r\n`}
                    routeName:{state.routeName}{`\r\n`}
                </Text>
                <AndroidNativeRefresh
                    style={{paddingTop: 30, height: 300, width: width, backgroundColor: '#999'}}
                    onLoadMore={(event) => {
                        alert("加载更多");
                    }}
                    onRefresh={(event) => {
                        alert("刷新");
                    }}>
                    <ScrollView
                    >
                        {this._getContent()}
                    </ScrollView>
                </AndroidNativeRefresh>
            </View>
        );
    }


    _getContent() {
        let contents = [];
        for (let i = 0; i < 50; i++) {
            contents.push(
                <Text style={{color: '#fff', marginTop: 10}} key={'item' + i}>content-->{i}</Text>
            );
        }
        return contents;
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});