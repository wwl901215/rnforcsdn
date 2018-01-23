/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/23]
 *@date 2018/1/23
 *@description RN调用android原生模块；
 */
import {NativeModules} from 'react-native';

export const AndroidRouterModule = NativeModules.AndroidRouterModule;//用于rn掉起android activity；
export const GetLocation = NativeModules.GetLocation;