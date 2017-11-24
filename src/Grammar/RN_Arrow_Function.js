/**
 * Created by chenguoguo on 2017/11/23.
 * 箭头函数
 */
import React, {Component} from 'react'
import {AppRegistry, StyleSheet, View, Text, TouchableOpacity} from 'react-native'

class RN_Arrow_Function extends Component {

    //定义箭头函数
    showMessage = (msg) => {
        alert(msg)
    }

    //等同于上面箭头函数的定义
    showMsg = function (msg) {
        alert(msg)
    }

    //定义不带参数的箭头函数(使用圆括号将参数部分括起来，如果没有参数，则直接使用一个圆括号就行)
    showMsgNoParams = () => {
        console.log('不带参数的箭头函数')
    }

    //定义带多个参数的箭头函数
    showMsgMutParams = (param01, param02) => {
        alert(param01)
    }

    //定义只有一个参数的箭头函数（圆括号可加可不加）
    showMsgOneParams = param01 => {
        alert(param01)
    }

    //如果函数体只有一行代码，则可以省略花括号，如下：
    showMsgFun = params01 => alert(param01)

    //如果箭头函数返回的是一个对象，由于花括号被解释为代码块，因此，必须在对象外面加上圆括号
    getObject = () => ({
        id:1,
        name:'VennyChen',
        age:24
    })

    //返回一个组件
    getCustomComponent = () => (
        <Text>return Component</Text>
    )

    render() {
        return (
            <TouchableOpacity>
                <Text onPress={() => {
                    // this.showMessage('arrow function')
                    this.showMsgOneParams('arrow function')
                }}>showTips</Text>
            </TouchableOpacity>
        )
    }
}

module.exports = RN_Arrow_Function