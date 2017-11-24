/**
 * Created by chenguoguo on 2017/11/24.
 * 延展操作符 ...
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'

class RN_Spread_Operator extends Component {

    render() {

        let student = {
            name: 'VennyChen',
            age: 24,
            sex: '男'
        }

        return (
            /*传统的写法*/
            <PropsSpread name={student.name}
                         age = {student.age}
                         sex = {student.sex}>
            </PropsSpread>

            /*等同于*/
            /*使用延展操作符*/
            /*<PropsSpread {...student}>

            </PropsSpread>*/



    )
    }

}

class PropsSpread extends Component {
    render() {
        let {name,age,sex} = this.props
        return (
            <Text>
                {/*{this.props.name + '-' + this.props.age + '-' + this.props.sex}*/}
                {name+'-'+age+'-'+sex}
            </Text>
        )
    }
}

module.exports = RN_Spread_Operator