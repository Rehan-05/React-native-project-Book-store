import React from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {windowHeight,windowWidth} from './Utils/Dimention'
export default function FormInput({iconType,PlaceHolder,textValue,...rest}) {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
            <AntDesign name={iconType}   size={25} color="#666" />
            </View>
            <TextInput
            style={styles.input}
            value={textValue}
            placeholder={PlaceHolder}
            placeholderTextColor="#666"
            numberOfLines={1}
            {...rest}
             />
             
        </View>
    )
}
export function SelectPhoto({iconType,textValue,...rest}) {
  return (
      <View style={styles.inputContainer}> 
          <TouchableOpacity style={{flexDirection:'row',width:'100%',backgroundColor:'#92b3d4',height:"100%"}}  {...rest} >
          <View style={styles.iconStyle}>
          <AntDesign name={iconType}   size={25} color="#666" />
          </View>
          <Text style={{fontSize:15,textAlign:'center',top:10,left:10,color:"#ccc" }} >
            {textValue}
          </Text>
          </TouchableOpacity>
           
      </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: '100%',
      height: windowHeight / 15,
      borderColor: '#ccc',
      borderRadius: 3,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: windowWidth / 1.5,
      height: windowHeight / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  });