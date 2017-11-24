/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import RN_Image from './src/Component/RN_Image'
import RN_Image_ResizeMode from './src/Component/RN_Image_ResizeMode'
import RN_TextInput from './src/Component/RN_TextInput'
import RN_FlatList from './src/Component/RN_FlatList'
import RN_Fetch_FlatList from './src/Component/RN_Fetch_FlatList'

import RN_This from './src/Grammar/RN_This'
import RN_TabNavigator from './src/Navigation/RN_TabNavigator'
import RN_StackNavigator from './src/Navigation/RN_StackNavigator'
import RN_DrawerNavigator from './src/Navigation/RN_DrawerNavigator'

import Head from './src/widget/Head'

export default class Main extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>相关组件用法事例</Text>
        <Head txt="RN组件" onPress={()=>{
            this.props.navigation.navigate('RN_Image')
            // this.props.navigation.navigate('RN_Image_ResizeMode')
        }}/>
        <Head txt="RN语法" onPress={()=>{
            this.props.navigation.navigate('RN_TextInput')
        }}/>
      </View>
    );
  }
}

const Pages = StackNavigator({
    'Main':{
        screen:Main,
        navigationOptions:{
            header:null,
        }
    },
    'RN_Image':{
        screen:RN_Image,
    },
    'RN_Image_ResizeMode':{
        screen:RN_Image_ResizeMode,
    },
    'RN_TextInput':{
        screen:RN_TextInput,
    },
    'RN_FlatList':{
        screen:RN_FlatList,
    },
    'RN_Fetch_FlatList':{
        screen:RN_Fetch_FlatList,
    },
    'RN_This':{
        screen:RN_This,
    },
    'RN_TabNavigator':{
        screen:RN_TabNavigator,
    },
    'RN_StackNavigator':{
        screen:RN_StackNavigator,
    },
    'RN_DrawerNavigator':{
        screen:RN_DrawerNavigator,
    },
},{
    initialRouteName:'Main'
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }
})


module.exports = Pages