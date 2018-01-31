/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/30]
 *@date 2018/1/30
 *@description
 */
'use strict';
import React from 'react';
import {
    requireNativeComponent,
    View,
    UIManager,
    findNodeHandle,
} from 'react-native';
var ViewPropTypes = require('ViewPropTypes');

var RCT_VIDEO_REF = 'VideoView';
class CusVideoPlayer extends React.Component {

    static propTypes = {
        ...ViewPropTypes,
        style: ViewPropTypes.style,
    }
    constructor(props){
        super(props);
    }

    onPause() {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this.refs[RCT_VIDEO_REF]),
            UIManager.RCTVideoPlayer.Commands.pause,
            null
        );
    }

    onStart() {
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this.refs[RCT_VIDEO_REF]),
            UIManager.RCTVideoPlayer.Commands.start,
            null
        );
    }

    render() {
        return(
            <RCTVideoView
                {...this.props}
                ref={RCT_VIDEO_REF}
            />
        );
    }
}

var RCTVideoView = requireNativeComponent('RCTVideoPlayer', CusVideoPlayer, {
    nativeOnly: {onChange: true}
});
module.exports = CusVideoPlayer;

// 解读：RCTVideoPlayer =》 CLASS_NAME
// UIManager.RCTVideoPlayer.Commands.pause =》 Map<String, Integer> getCommandsMap() 中的String；