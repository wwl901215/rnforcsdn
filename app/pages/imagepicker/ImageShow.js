/**
 *@author wangwenliang
 *@version [React-Native Ocj V01,2018/1/12]
 *@date 2018/1/12
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
    CameraRoll,
    Modal,
    Dimensions
} from 'react-native';
import BasePage from '../../base/BasePage';
const {width, height} = Dimensions.get('window');
let self = null;
let numColumns = 3;
export default class ImageShow extends BasePage {

    // static propTypes = {
    //     show: PropTypes.bool,
    //     getImages: PropTypes.func,
    // }

    static defaultProps = {
        show: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            data:[],
            pageNum:44,
        }
        self = this;
    }

    componentDidMount() {
        this.getImg(this.state.pageNum);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== this.state.show) {
            this.setState({show: nextProps.show});
        }
    }

    getImg(pageNum = 10){
        let that = this;
        CameraRoll.getPhotos({first:pageNum}).done((data) => {
            console.log(data);
            let imgs = [];
            if (data.edges && data.edges.length > 0){
                data.edges.map((item,index) => {
                    // if (index === 0){
                    //     this.setState({url:item.node.image.uri});
                    // }
                    imgs.push(item.node.image);
                });
            }
            this.setState({data:imgs});
        },(err) => {
            console.log(err);
        });
    }

    _close() {
        this.setState({show: false});
    }

    _show() {
        this.setState({show: true});
    }

    render() {
        return (
            <Modal onRequestClose={() => {}} equestclose={() => {}} visible={this.state.show} transparent={false}>
                <Button title={"关闭"} style={{width:30,height:30}} onPress={() => this._close()}/>
                <View style={styles.container}>
                    <FlatList
                        numColumns={numColumns}
                        data={this.state.data}
                        renderItem={this._renderItem}
                        showsHorizontalScrollIndicator={false}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => {
                            this.time = setTimeout(() => {
                                this.state.pageNum += 20;
                                this.getImg(this.state.pageNum);
                            });
                        }}
                    />
                </View>
            </Modal>
        );
    }

    _renderItem({item,index}){
        return(
            <TouchableOpacity onPress={() => {
                self.props.getImages(item.uri);
                self._close();
            }} key={index} style={styles.item}>
                <Image style={styles.image} resizeMode={"cover"} source={{uri:item.uri || ""}}/>
            </TouchableOpacity>
        )
    }

}

const marginSize = 2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#555'
    },
    item:{
        width: width/numColumns - marginSize*2,
        height: width/numColumns - marginSize*2,
        borderColor: "#fffff9",
        borderRadius: 2,
        borderWidth: 2,
        margin: marginSize,
    },
    image:{
        flex:1,
    }
});