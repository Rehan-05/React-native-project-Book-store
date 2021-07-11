import React, { Component } from 'react'
import {View,Image} from 'react-native'
export default class TrendingBooks extends Component {
    render() {
        return (
            <View style={{flexDirection:'row'}}>
        <Image source={{uri:this.props.book1}} style={{width:100,height:150,margin:10,borderRadius:20}} />
        <Image source={{uri:this.props.book2}} style={{width:100,height:150,margin:10,borderRadius:20}} />
        <Image source={{uri:this.props.book3}} style={{width:100,height:150,margin:10,borderRadius:20}} />
        </View>
        )
    }
}


