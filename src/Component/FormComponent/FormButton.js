import React from 'react'
import { TouchableOpacity, Text ,StyleSheet,ActivityIndicator} from 'react-native';
import {windowWidth,windowHeight} from './Utils/Dimention'


export default function FormButton({user,buttonTitle,...rest}) {
    return (
        
            <TouchableOpacity style={styles.buttonContainer} {...rest} >
            <Text style={styles.buttonText}>{buttonTitle}</Text>
            {user ? <ActivityIndicator size="small" color="#fff" /> : null}
            </TouchableOpacity>
       
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      backgroundColor: '#2e64e5',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      
    },
  });
