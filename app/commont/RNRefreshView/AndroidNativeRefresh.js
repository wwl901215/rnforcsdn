/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/4/2]
 *@date 2018/4/2
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
var PropTypes = require('prop-types');
var ViewPropTypes = require('ViewPropTypes');

var RCT_VIDEO_REF = 'refreshref';
class AndroidNativeRefresh extends React.Component {

    static propTypes = {
        ...ViewPropTypes,
        onRefresh: PropTypes.func,
        onLoadMore: PropTypes.func,
        style: ViewPropTypes.style,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {children, onRefresh, onLoadMore} = this.props;
        return (
            <RCTRNRrefreshView
                {...this.props}
                ref={RCT_VIDEO_REF}
                onRefresh={this.onRefresh}
                onLoadMore={this.onLoadMore}
            >
                {React.Children.toArray(this.props.children)}
            </RCTRNRrefreshView>
        );
    }
}

var view = requireNativeComponent('RCTRNRrefreshView', AndroidNativeRefresh);
module.exports = view;
