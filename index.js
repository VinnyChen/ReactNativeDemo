import React,{Component} from 'react'
import { AppRegistry ,StyleSheet,View,Text,Button} from 'react-native';
import {StackNavigator} from 'react-navigation'

import RN_Image from './src/Component/RN_Image'
import RN_Image_ResizeMode from './src/Component/RN_Image_ResizeMode'
import RN_TextInput from './src/Component/RN_TextInput'
import RN_FlatList from './src/Component/RN_FlatList'
import RN_Fetch_FlatList from './src/Component/RN_Fetch_FlatList'

import RN_TabNavigator from './src/Navigation/RN_TabNavigator'
import RN_StackNavigator from './src/Navigation/RN_StackNavigator'
import RN_DrawerNavigator from './src/Navigation/RN_DrawerNavigator'
import Head from './src/widget/Head'

import RN_This from './src/Grammar/RN_This'
import RN_Arrow_Function from './src/Grammar/RN_Arrow_Function'
import RN_Spread_Operator from './src/Grammar/RN_Spread_Operator'




class RootScene extends Component{


    render(){
        return(
            <View style={styles.container}>
                {/*RN组件*/}
                <Text>相关组件用法事例</Text>
                <Head txt="Image用法" onPress={()=>{
                    this.props.navigation.navigate('RN_Image')
                    // this.props.navigation.navigate('RN_Image_ResizeMode')
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
                <Head txt="TabNavigator用法" onPress={()=>{
                    this.props.navigation.navigate('RN_TabNavigator')
                }}/>
                <Head txt="StackNavigator用法" onPress={()=>{
                    this.props.navigation.navigate('RN_StackNavigator')
                }}/>
                <Head txt="DrawerNavigator用法" onPress={()=>{
                    this.props.navigation.navigate('RN_DrawerNavigator')
                }}/>

                {/*RN语法*/}
                <Head txt="箭头函数=>用法" onPress={()=>{
                    this.props.navigation.navigate('RN_Arrow_Function')
                }}/>
                <Head txt="this的用法" onPress={()=>{
                    this.props.navigation.navigate('RN_This')
                }}/>
                <Head txt="this的用法" onPress={()=>{
                    this.props.navigation.navigate('RN_Spread_Operator')
                }}/>
            </View>
        )
    }

}

const Pages = StackNavigator({
    /*RN组件*/
    'RootScene':{
        screen:RootScene,
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
    'RN_TabNavigator':{
        screen:RN_TabNavigator,
    },
    'RN_StackNavigator':{
        screen:RN_StackNavigator,
    },
    'RN_DrawerNavigator':{
        screen:RN_DrawerNavigator,
    },
    /*RN语法*/
    'RN_Arrow_Function':{
        screen:RN_Arrow_Function,
    },
    'RN_This':{
        screen:RN_This,
    },
    'RN_Spread_Operator':{
        screen:RN_Spread_Operator,
    }
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
