import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'

export default function TouchAbleButton({text,icon,color,...rest}) {
    return (
       <TouchableOpacity style={{flexDirection:'row',width:"100%",backgroundColor:"#dee3e2",height:40,marginTop:5,borderRadius:10}} {...rest}>
           <View style={{ height:30,width:40,justifyContent:'center',alignItems:'center',borderRightWidth:0.3,top:5,borderRightColor:"#bec2c1"
            }}>
           <Icon  name={icon} color={color} size={20}  />
           </View>
           <Text style={{top:10,left:5,fontSize:18}}>{text}</Text>
       </TouchableOpacity>
    )
}
