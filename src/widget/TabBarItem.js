/**
 * Created by chenguoguo on 2017/11/1.
 * tab选项卡的图标组件
 */

import React,{ PureComponent } from "react";
import { AppRegistry,Text,StyleSheet,View,Image } from 'react-native';

class TabBarItem extends PureComponent{

    constructor(props){
        super(props)
    }
    render(){
        let currImg = this.props.focused?this.props.selectImage:this.props.normalImage;
        return(
            <Image
                source={currImg}></Image>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        textAlign:'center',
    }
})

module.exports  = TabBarItem;
