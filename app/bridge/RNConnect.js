/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/23]
 *@date 2018/1/23
 *@description
 */
import {NativeModules, Platform} from "react-native";
import * as AndroidModules from "./AndroidModules";

export default class RNConnect {

    //从android获取位置信息
    static getLocationFromAndroid(callback: func){
        if (Platform.OS === "android"){
            let getL = AndroidModules.AndroidRouterModule;
            getL.getLocation((events) => {
                //do some things
                callback && callback(events);
            });
        }else {

        }
    }

    static pushs(data, callback: func){
        if (Platform.OS === "android"){
            startAndroidPage(JSON.stringify(data),callback);
        }else {

        }
    }

}

async function startAndroidPage(data, callback: func) {
    try {
        let jsonParams = await AndroidModules.AndroidRouterModule.startAndroidActivity(data);
        let jsonObj = JSON.parse(jsonParams);
        callback && callback(jsonObj);
    } catch (e){
    }
}