/**
 * Created by chenguoguo on 2017/11/10.
 * TabNavigator用法详解
 */

import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Image, View, Text} from 'react-native'
import {TabNavigator, TabBarBottom} from 'react-navigation'

import TabOnePage from '../Component/RN_TabPage_One'
import TabTwoPage from '../Component/RN_TabPage_Two'
import TabThreePage from '../Component/RN_TabPage_Three'
import TabFouePage from '../Component/RN_TabPage_Four'

import TabBarItem from '../widget/TabBarItem'

class RN_TabNavigator extends Component {


    render() {
        return (
            <RN_TabNav/>
        )
    }

}
const TabRouteConfigs = {
    TabOne: {
        screen: TabOnePage,
        navigationOptions: {//对应路由页面配置选项
            title: 'TabFirst',//tab标题，可用作headerTitle或者tabBarLable回退标题(默认为路由名称)
            tabBarVisible: true,//是否显示tab
            //tabBarIcon:tab的icon图标组件，可根据 {focused: boolean, tintColor: string} 方法返回一个icon组件，如下
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectImage={require('../img/tabbar/pfb_tabbar_order_selected.png')}
                    normalImage={require('../img/tabbar/pfb_tabbar_order.png')}/>
            ),
            // tabBarLabel:Tab中显示的标题字符串或者组件，也可根据 { focused: boolean, tintColor: string } 方法返回一个组件
            // tabBarLabel:同上tabBarIcon
        }
    },
    TabTwo: {
        screen: TabTwoPage,
        navigationOptions: {
            title: 'TabSecond',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectImage={require('../img/tabbar/pfb_tabbar_homepage_selected.png')}
                    normalImage={require('../img/tabbar/pfb_tabbar_homepage.png')}/>
            ),
        }
    },
    TabThree: {
        screen: TabThreePage,
        navigationOptions: {
            title: 'TabThird',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectImage={require('../img/tabbar/pfb_tabbar_mine_selected.png')}
                    normalImage={require('../img/tabbar/pfb_tabbar_mine.png')}/>
            ),
        }
    },
    TabFour: {
        screen: TabFouePage,
        navigationOptions: {
            title: 'TabFourth',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectImage={require('../img/tabbar/pfb_tabbar_merchant_selected.png')}
                    normalImage={require('../img/tabbar/pfb_tabbar_merchant.png')}/>
            ),
        }
    }
}
const TabNavConfigs = {
    initialRouteName: 'TabOne',//默认的路由页面
    tabBarComponent: TabBarBottom,//组件类型，分：顶部组件、底部组件
    tabBarPosition: 'bottom',//选项卡位置：分'top'和'bottom'
    swipeEnabled: true,//是否可以滑动切换选项卡
    animationEnabled: true,//点击选项卡切换界面是否需要动画
    lazy: true,//是否懒加载界面
    order: ['TabTwo', 'TabFour', 'TabOne', 'TabThree'],//选项卡顺序，默认为路由配置顺序（通过路由名称的数组）
    backBehavior: 'initailRoute',//点击返回键的处理，'initailRoute'表示返回初始路由界面，'none'表示退出当前界面
    tabBarOptions: {//tabBar配置属性,分'TabBarTop'和'TabBarBottom'两种情况

        /*******************************TabBarTop************************************/
        /*//针对TabBarTop时属性有:
         activeTintColor:'blue',//选中时选项卡文字颜色
         inactiveTintColor:'gray',//未选中时选项卡文字颜色
         showIcon:true,//是否选择图标，默认显示
         showLabel:true,//是否选择标签，默认显示
         upperCaseLabel:true,//是否使用大写字母
         pressColor:'green',//android5.0以上按下tab的波纹颜色
         // pressOpacity:'',//android5.0以下活ios按下的透明度
         scrollEnabled:true,//是否可以滚动
         tabStyle:{//单个tab的样式，选项卡中间的整体
         height:20,
         },
         indicatorStyle:{//指示器的样式
         height:0
         },
         labelStyle:{//标签的样式

         },
         iconStyle:{//图标的样式

         },*/



        /******************************TabBarBottom***********************************/
        //针对TabBarBottom时属性有:
        activeTintColor: 'red',//选中Tab的文字颜色
        activeBackgroundColor: 'yellow',//选中Tab的背景颜色
        inactiveTintColor: 'black',//未选中Tab的的文字颜色
        inactiveBackgroundColor: 'white',//未选中Tab的背景颜色
        showLabel: true,//是否显示标题
        style: {//整个tabBar的样式

        },
        labelStyle: {//标签的样式

        },
        tabStyle: {//单个tab的样式

        }
    }

}
const RN_TabNav = TabNavigator(TabRouteConfigs, TabNavConfigs)

module.exports = RN_TabNavigator
