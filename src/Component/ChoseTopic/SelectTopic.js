import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'

export default class SelectTopic extends Component {
    render() {
        return (
            <View style={{flexDirection:"row",}}>
            <View>
            <Image source={{uri:"https://i.pinimg.com/originals/3a/02/d1/3a02d15a2030fcb676b0e60a31942bb9.png"}} style={{width:100,height:100,borderRadius:50,margin:10}} />
            <Text style={{textAlign:'center'}}>Topic Name </Text>
            </View>
            <View>
            <Image source={{uri:"https://i.pinimg.com/originals/3a/02/d1/3a02d15a2030fcb676b0e60a31942bb9.png"}} style={{width:100,height:100,borderRadius:50,margin:10}} />
            <Text style={{textAlign:'center'}}>Topic Name </Text>
            
            </View>
            <View>
            <Image source={{uri:"https://i.pinimg.com/originals/3a/02/d1/3a02d15a2030fcb676b0e60a31942bb9.png"}} style={{width:100,height:100,borderRadius:50,margin:10}} />
            <Text style={{textAlign:'center'}}>Topic Name </Text>
            </View>
            </View>
        )
    }
}
