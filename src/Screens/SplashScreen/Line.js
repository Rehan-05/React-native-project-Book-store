import React from 'react'
import { View,StyleSheet } from "react-native";
function Line(props) {
    return (
        
       <View style={{
            ...styles.VerticalLine,
            height:props.height,
            transform:[{rotate:props.deg}],
            left:props.left,
            top:props.top,
       }}>

       </View>
    )
}

export default Line
const styles=StyleSheet.create({
    VerticalLine:{
        
        borderWidth:2,
        backgroundColor:'#fff',
        width:1,
        borderColor:'#fff',
    }
})