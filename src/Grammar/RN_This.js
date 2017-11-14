/**
 * Created by chenguoguo on 2017/11/10.
 */
import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Image, View, Text} from 'react-native'
import Head from '../widget/Head'

class RN_This extends Component {

    /*绑定this的三种实现方式*/

    constructor(props) {
        super(props)
        this.state = {
            name: '张三',
            age: 22,
            sex: '男'
        }

        //第一种this的绑定方式
        this.onTextClickFirst = this.onTextClickFirst.bind(this)
    }


    render() {
        return (
            <View style={styles.container}>
                <Head onPress={this.onTextClickFirst} txt="this的第一种绑定方式"></Head>
                {/*this的第二种绑定方式*/}
                <Head onPress={this.onTextClickSencond.bind(this)} txt="this的第二种绑定方式"></Head>
                <Head onPress={this.onTextClickThree} txt="this的第三种绑定方式"></Head>
            </View>

        )
    }

    onTextClickFirst() {
        alert(this.state.name)
    }

    onTextClickSencond() {
        alert(this.state.age)
    }

    /* this的第三种绑定方式,可直接在绑定的地方写*/
    onTextClickThree = () => {
        alert(this.state.sex)
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        width: 240,
        height: 36,
        marginTop: 10,
        backgroundColor: 'blue',
        color: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 6
    }
})


module.exports = RN_This