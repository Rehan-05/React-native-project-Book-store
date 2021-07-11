import React from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
export default function Download({navigation,route}) {
    const {detail} = route.params;
    console.log(detail)
    return (
        <View style={{flex:1}}>
            <WebView
            source={{uri:detail}}
 
   />
        </View>
    )
}
