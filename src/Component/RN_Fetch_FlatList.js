/**
 * Created by chenguoguo on 2017/11/13.
 * 网络(Fetch)+列表（FlatList）Demo
 */
import React,{Component} from 'react'
import {AppRegistry,StyleSheet,View,FlatList,Text} from 'react-native'

class RN_Fetch_FlatList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            text: {},
        }
    }

    componentDidMount() {
        this.requestData()
    }

    async requestData() {
        try {
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            let json = await response.json()
            // this.showOneAlert(json)
            // alert(json.title)
            // alert(json.movies[0].releaseYear)
            let dataList = json.movies.map((info) => {
                return {
                    key: '1',
                    title: info.title,
                    releaseYear: info.releaseYear,
                }
            })
            // alert(dataList[0].title)
            this.setState({dataList: dataList, text: json})
        } catch (error) {
            // console.log(error)
        }
    }

    render() {
        return (
            <View>
                <View style={styles.head}>
                    <Text style={styles.headTitle}>{this.state.text.title}</Text>
                    <Text style={styles.headTitle}>{this.state.text.description}</Text>
                    <Text style={styles.itemDecor}></Text>
                    <Text></Text>
                </View>

                <FlatList
                    data={this.state.dataList}
                    renderItem={({item}) =>
                        <View style={styles.item}>
                            <Text>{item.title}</Text>
                            <Text>{item.releaseYear}</Text>
                        </View>
                    }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    head: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
    },
    headTitle:{
        fontSize: 20,
    },
    itemDecor:{
        height:2,
        backgroundColor:'gray'
    }

})

module.exports = RN_Fetch_FlatList
