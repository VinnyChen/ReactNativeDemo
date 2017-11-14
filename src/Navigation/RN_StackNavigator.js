/**
 * Created by chenguoguo on 2017/11/10.
 */
import React,{Component} from 'react'
import {AppRegistry,StyleSheet,Image,View,Text} from 'react-native'
import {StackNavigator} from 'react-navigation'

import StackRouteOne from '../Component/RN_TabPage_One'
import StackRoutetwo from '../Component/RN_TabPage_Two'

import Head from '../widget/Head'

class RN_StackNavigator extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Head txt="路由跳转" onPress={()=>{
                    this.props.navigation.navigate('StackRouteTwo')
                }}/>
            </View>
        )
    }

}
const StackRouteConfig = {
    StackRouteOne:{
        screen:StackRouteOne,
        navigationOptions:({navigation})=>({
            title:'路由导向One',
            header:null,
            gesturesEnabled:true,
        })
    },
    StackRouteTwo:{
        screen:StackRoutetwo,
        navigationOptions:({navigation})=>({
            title:'路由导向TWo',
            header:null,
            gesturesEnabled:true,
        })
    },
    RN_StackNavigator:{
        screen:RN_StackNavigator,
        navigationOptions:({navigation})=>({
            title:'路由导向RN',//头部标题或者Tab标题
            // header:null,
            headTitle:'路由导向RN',//头部标题
            headerLeft:(<Text>bbb</Text>),//头部左边组件
            headerRight:(<Text>aaa</Text>),//头部右边组件
            gesturesEnabled:true,//是否支持侧滑返回（同IOS效果）
            headerStyle:{//头部组件的样式
                backgroundColor:'#e0e0e0',
                height:50,
            },
            headerTitleStyle:{//头部标题的样式
                alignSelf:'center',//标题居中，默认左对齐
                fontSize:16
            },
            headerBackTitleStyle:{//头部返回标题的样式

            },
            headerTintColor:{//头部颜色

            }
        })
    }
}
const StackNavConfig = {
    initialRouteName:'RN_StackNavigator',
    mode:'card',//页面切换模式：1.card 左右切换  2.modal 上下切换
    headerMode:'none',//页面跳转时，头部动画模式，有三个值（float:渐变  screen:淡入淡出  none:没有动画）
    transitionConfig:(()=>({//页面跳转动画,覆盖默认动画效果headerMode

    })),
    onTransitionStart: (() => {//页面跳转动画开始时调用
        console.log('页面跳转动画开始');
    }),
    onTransitionEnd: (() => {//页面跳转动画结束时调用
        console.log('页面跳转动画结束');
    }),
    //路由页面配置选项，会被RouteConfigs中的配置选项覆盖
    //路由页面配置有三处：1.StackNavigatorConfig  2.RouteConfigs  3.对应页面中静态配置
    //配置的优先级为：静态配置 > RouteConfigs > StackNavigatorConfig
    navigationOptions:{

    }
}

const StackNav = StackNavigator(StackRouteConfig,StackNavConfig)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})


module.exports = StackNav