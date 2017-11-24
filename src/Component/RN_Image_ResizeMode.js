/**
 * Created by chenguoguo on 2017/11/22.
 */
import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Image, View, Text} from 'react-native'

class RN_Image_ResizeMode extends Component {


    render() {
        return (

            <View style={styles.container}>

                <View style={styles.itemContainer}>
                    <Text style={styles.title}>cover模式:</Text>
                    <Image
                        source={{uri: 'react'}}
                        style={styles.icon}
                        resizeMode='cover'/>
                </View>

                <View style={styles.itemContainer}>
                    <Text style={styles.title}>contain模式:</Text>
                    <Image
                        source={{uri: 'react'}}
                        style={styles.icon}
                        resizeMode='contain'/>
                </View>

                <View style={styles.itemContainer}>
                    <Text style={styles.title}>stretch模式:</Text>
                    <Image
                        source={{uri: 'react'}}
                        style={styles.icon}
                        resizeMode='stretch'/>
                </View>

            </View>


            /*<View style={styles.container}>

             /*<Text style={styles.title}>cover模式:</Text>
             <Image
             source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4096799084,2498783879&fm=27&gp=0.jpg'}}
             style={styles.icon}
             resizeMode='cover'/>


             <Text style={styles.title}>contain模式:</Text>
             <Image
             source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4096799084,2498783879&fm=27&gp=0.jpg'}}
             style={styles.icon}
             resizeMode='contain'/>
             <Text style={styles.title}>stretch模式:</Text>


             <Image
             source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4096799084,2498783879&fm=27&gp=0.jpg'}}
             style={styles.icon}
             resizeMode='stretch'/>*/
            // </View>/**/
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    itemContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        color: 'white',
        marginLeft: 20
    },
    icon: {
        width: 124,
        height: 80,
        marginTop: 6,
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: 'white'
    }
})

module.exports = RN_Image_ResizeMode