/**
 * Created by chenguoguo on 2017/11/13.
 * 封装的TextView，便于将内容居中
 */
import React,{Component} from 'react'
import {AppRegistry,StyleSheet,View,Text,TouchableOpacity} from 'react-native'

class Head extends Component{

    render(){
        return(
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Text style={styles.text}>
                    {this.props.txt}
                </Text>
            </TouchableOpacity>


    )
    }

}

const styles = StyleSheet.create({
    container:{
        width:240,
        height:40,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#404AE0',
        marginTop:10,
        // borderTopWidth:1,
        // borderBottomWidth:1,
        // borderLeftWidth:1,
        // borderRightWidth:1,
        // borderColor:'#e0e0e0',
        borderRadius:6
    },
    text:{
        color:'black',
    },
})

module.exports=Head