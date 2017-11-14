/**
 * Created by chenguoguo on 2017/11/10.
 */
import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Image, View, Text, ScrollView} from 'react-native'
import {DrawerNavigator, DrawerItems} from 'react-navigation'

import TabOnePage from '../Component/RN_TabPage_One'
import TabTwoPage from '../Component/RN_TabPage_Two'
import TabThreePage from '../Component/RN_TabPage_Three'
import TabFouePage from '../Component/RN_TabPage_Four'

import TabBarItem from '../widget/TabBarItem'
import Head from '../widget/Head'

class RN_DrawerNavigator extends Component {


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Head txt="打开侧滑菜单" onPress={() => {
                    this.props.navigation.navigate('DrawerOpen')
                }}></Head>
            </View>

        )
    }

}

const DrawerRouteConfigs = {
    TabOne: {
        screen: TabOnePage,
        navigationOptions: {//对应路由页面配置选项
            drawerLabel: 'drawerLabel1',//tab标题，可用作headerTitle或者tabBarLable回退标题(默认为路由名称)
            drawerIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectImage={require('../img/tabbar/pfb_tabbar_order_selected.png')}
                    normalImage={require('../img/tabbar/pfb_tabbar_order.png')}/>
            ),
        }
    },
    TabTwo: {
        screen: TabTwoPage,
        navigationOptions: {
            drawerLabel: 'drawerLabel2',
            drawerIcon: ({focused, tintColor}) => (
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
            drawerLabel: 'drawerLabel3',
            drawerIcon: ({focused, tintColor}) => (
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
            drawerLabel: 'drawerLabel4',
            drawerIcon: ({focused, tintColor}) => (
                <TabBarItem
                    focused={focused}
                    tintColor={tintColor}
                    selectImage={require('../img/tabbar/pfb_tabbar_merchant_selected.png')}
                    normalImage={require('../img/tabbar/pfb_tabbar_merchant.png')}/>
            ),
        }
    },
    RN_DrawerNavigator: {
        screen: RN_DrawerNavigator,
        navigationOptions:{
            drawerLabel:'',
            drawerIcon:null,
            contentOptions:{
                labelStyle: {//抽屉标签／条目标题样式
                    color: 'green',
                    marginLeft: 40
                },
            }
        }
    }
}

const DrawerNavConfigs = {
    initialRouteName: 'RN_DrawerNavigator',
    drawerWidth: 240,// 设置抽屉的宽度
    drawerPosition: 'left',// 设置抽屉方向(从右边拉出，还是左边拉出)
    //默认的的值是 DrawerItems,我们也可以自己配置组件
    contentComponent: props => <ScrollView
        style={{borderWidth: 0, borderColor: 'white'}}>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 120,
            backgroundColor: 'blue'
        }}>
            <Image source={{uri: 'icon_app'}} style={{width: 40, height: 40}}/>
            <Text>vinnyChen</Text>
        </View>
        <DrawerItems {...props}/>
    </ScrollView>,
    contentOptions: {
        items: ['TabOne', 'TabTwo', 'TabThree', 'TabFour'],//抽屉栏目路由名称数组
        activeItemKey: 'key',//当前选中页面的key id
        activeTintColor: '#ff863f',//选中条目状态文字颜色
        activeBackgroundColor: '#d0caff',//选中条目的背景颜色
        inactiveTintColor: '#000000',//未选中条目状态文字颜色
        inactiveBackgroundColor: '#fffcf8',//未选中条目的背景颜色
        // onItemPress: (route) => {//这个设置了没起作用，android,api 0.45
        //     console.log('TAG' + JSON.stringify(route))
        // },
        style: {//抽屉内容样式
            marginVertical: 20,
            height: 10,
            width: 50,
            backgroundColor: 'green',
            borderBottomWidth: 2,
            borderColor: 'yellow'
        },
        labelStyle: {//抽屉标签／条目标题样式
            color: 'red',
            marginLeft: 40
        },
    },
}

const DrawerNav = DrawerNavigator(DrawerRouteConfigs, DrawerNavConfigs)

module.exports = DrawerNav