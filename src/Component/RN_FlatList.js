/**
 * Created by chenguoguo on 2017/11/10.
 * 列表FlatList
 */
import React, {Component} from 'react'
import {AppRegistry, StyleSheet, FlatList,View,Text} from 'react-native'

class RN_FlatList extends Component {

    render() {
        return (
            <View>
                <FlatList
                    data={[{value: 'zhangSan', key: '01'},
                        {value: 'liSi', key: '02'},
                        {value: 'wangWu', key: '03'},
                        {value: 'chenLiu', key: '04'},
                        {value: 'heQi', key: '05'},
                        {value: 'huBa', key: '06'},
                        {value: 'zhouJiu', key: '07'}]}
                    renderItem={({item}) =>

                        <View style={Styles.parent}>
                            <Text style={Styles.text}>{item.key}</Text>
                            <Text style={Styles.text}>{item.value}</Text>
                        </View>

                    }/>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    text: {
        fontSize: 26,
        paddingLeft: 10,
        paddingRight: 10
    },
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
module.exports = RN_FlatList