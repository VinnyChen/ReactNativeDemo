/**
 * Created by chenguoguo on 2017/11/10.
 * Image几种加载图片方式详解以及相关注意事项
 */
import React,{Component} from 'react'
import {AppRegistry,StyleSheet,Image,View,Text} from 'react-native'

class RN_Image extends Component{

    /*Image：两个属性
    * 1.resource:图片资源（如下）
    * 2.resizeMode:当设置的图片尺寸和实际加载图片的尺寸步符合时，通过该属性来决定使用何种方式去加载图片
    *   三个属性值：
    *   cover:等比例缩放，用图片最短的那条边作为基础占满组件
    *   contain:等比例缩放，用图片最长的那条边作为基础占满组件
    *   stretch:拉伸铺满，可能会改变图片的比例
    * */

    render(){
        return(
            <View style={styles.container}>

                {/*1.加载本地图片*/}

                {/*从React Native项目中加载图片*/}
                {/*当前项目指的是去除android、ios、node_modules三个目录之外的*/}
                {/*require函数中填写图片文件的路径，注意：后缀名'.png'不能去掉*/}
                {/*该种方式会根据平台选择对应的图片，如：icon.android.png与icon.ios.png(中间的分别对应两个平台名称)*/}
                {/*该种方式的require函数中不支持字符串拼接*/}
                {/*RN实现图片适配的方式：图片命名为icon@2x.png与icon@3x.png，RN会根据屏幕大小来选择对应的，注意：
                    android在加载这样的图片的时候，不能够加上'@2x'这样的，不然无法识别*/}
                <Text style={styles.text}>1.从项目中加载图片</Text>
                <Image source={require('../img/icon_project.png')} style={{marginTop:20}}></Image>

                {/*2.加载app中的图片*/}
                {/*app中的图片指的是:
                    1.android中:android/app/src/main/res/drawable文件下
                    2.ios中:Images.xcassets文件夹下*/}
                {/*此种方式加载图片，不能有图片后缀名,只需要文件名就可以*/}
                {/*此种方式因为不提供图片安全检查，所以需要指定图片的宽度和高度，不然图片无法显示*/}
                {/*该种方式的uri支持字符串拼接*/}
                <Text style={styles.text}>3.从app中加载图片</Text>
                <Image source={{uri:'icon_app'}} style = {styles.icon}></Image>


                {/*3.加载网络图片*/}
                {/*必须指定图片的宽度和高度，不然无法显示出来*/}
                <Text style={styles.text}>2.从网络加载图片</Text>
                <Image
                    source = {{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4096799084,2498783879&fm=27&gp=0.jpg'}}
                    style={styles.icon}
                    resizeMode = 'cover'></Image>


            </View>

        )
    }

}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    icon:{
        width:120,
        height:120,
        marginTop:10
    },
    text:{
        color:'black',
        fontSize:16,
        marginTop:20
    }
})

module.exports = RN_Image