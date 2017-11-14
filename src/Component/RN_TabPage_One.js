/**
 * Created by chenguoguo on 2017/11/13.
 */

import React, {Component} from 'react'
import {AppRegistry, StyleSheet, View, Text} from 'react-native'

class RN_TabPage_One extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Page One</Text>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'black'
    }
})

module.exports = RN_TabPage_One