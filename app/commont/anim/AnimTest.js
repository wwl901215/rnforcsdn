/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/18]
 *@date 2018/1/18
 *@description
 */
'use strict';
import React from 'react';
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
    CameraRoll,
    Linking,
    PanResponder,
    Animated,
    Dimensions,
    Easing
} from 'react-native';
import BasePage from '../../base/BasePage';
import * as Navigator from '../../scens/Navigator';
let widthD = Dimensions.get('window').width;
let heightD = Dimensions.get('window').height;

export default class AnimTest extends BasePage {

    constructor(props) {
        super(props);
        this.position = new Animated.Value(0);
        this.itemIndex = 0;
    }

    componentWillMount() {
        this._setTime();
    }

    _setTime(){
        this.timeout = setTimeout(()=>{
            console.log("timeout"+this.itemIndex);
            Animated.timing(
                this.position,
                {
                    toValue: this.itemIndex + 1,
                    easing: Easing.linear,
                    duration: 4000,
                }
            ).start(()=>{
                if (this.itemIndex > 2){
                    this.itemIndex = 0;
                }else {
                    this.itemIndex += 1;
                }
                this.position.setValue(this.itemIndex);
                if (!this.stopTimeOut){
                    this._setTime();
                }
            });
        })
    }

    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
        this.stopTimeOut = true;
    }

    render() {
        return (
            <View style={styles.container}>
                {[0,1,2,3].map((item,index) => {
                    return(
                        <Animated.View
                            key={index}
                            style={[
                                {backgroundColor: 'red', width: 100, height: 100,margin:10},
                                {
                                    transform: [
                                        {
                                            scale: 1,
                                        },
                                        {
                                            translateX: this.position.interpolate({
                                                inputRange: [index,index + 1],
                                                outputRange: [(index/4)*widthD, (index/4)*widthD + widthD]
                                            })
                                        }
                                    ]
                                }
                            ]}>
                            <TouchableOpacity style={{width:100,height:100,alignItems:'center',justifyContent:'center'}} onPress={()=>{
                                alert('点你咋滴')
                            }}>
                                <Text>有种你点我啊{index}</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    );
                })}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        backgroundColor: '#fffff9',
        marginTop: 20,
        flexDirection:'row'
    }
});