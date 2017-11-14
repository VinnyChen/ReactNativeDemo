import React,{Component} from 'react'
import { AppRegistry ,StyleSheet,View,Text,Button} from 'react-native';
import {StackNavigator} from 'react-navigation'

import RN_Image from './src/Component/RN_Image'
import RN_TextInput from './src/Component/RN_TextInput'
import RN_FlatList from './src/Component/RN_FlatList'
import RN_Fetch_FlatList from './src/Component/RN_Fetch_FlatList'

import RN_This from './src/Grammar/RN_This'
import RN_TabNavigator from './src/Navigation/RN_TabNavigator'
import RN_StackNavigator from './src/Navigation/RN_StackNavigator'
import RN_DrawerNavigator from './src/Navigation/RN_DrawerNavigator'

import Head from './src/widget/Head'


class RootScene extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Text>相关组件用法事例</Text>
                <Head txt="Image用法" onPress={()=>{
                    this.props.navigation.navigate('RN_Image')
                }}/>
                <Head txt="TextInput用法" onPress={()=>{
                    this.props.navigation.navigate('RN_TextInput')
                }}/>
                <Head txt="FlatList用法" onPress={()=>{
                    this.props.navigation.navigate('RN_FlatList')
                }}/>
                <Head txt="RN_Fetch_FlatList" onPress={()=>{
                    this.props.navigation.navigate('RN_Fetch_FlatList')
                }}/>
                <Head txt="This的用法" onPress={()=>{
                    this.props.navigation.navigate('RN_This')
                }}/>
                <Head txt="TabNavigator用法" onPress={()=>{
                    this.props.navigation.navigate('RN_TabNavigator')
                }}/>
                <Head txt="StackNavigator用法" onPress={()=>{
                    this.props.navigation.navigate('RN_StackNavigator')
                }}/>
                <Head txt="DrawerNavigator用法" onPress={()=>{
                    this.props.navigation.navigate('RN_DrawerNavigator')
                }}/>

            </View>
        )
    }

}

const Pages = StackNavigator({
    'RootScene':{
        screen:RootScene,
        navigationOptions:{
            header:null,
        }
    },
    'RN_Image':{
        screen:RN_Image,
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
    initialRouteName:'RootScene'
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }
})


AppRegistry.registerComponent('ReactNativeDemo', () => Pages);
