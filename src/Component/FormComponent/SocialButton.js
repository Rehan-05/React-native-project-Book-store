import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import {windowHeight, windowWidth} from './Utils/Dimention';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function SocialButton({bgColor,Color,ButtonTitle,btnType,...rest}) {
    return (
        <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:bgColor}]} {...rest}>
            <View style={styles.iconWrapper}>
               <FontAwesome style={styles.icon} name={btnType} size={22} color={Color} />
            </View>
            <View style={styles.btnTxtWrapper} >
                <Text style={[styles.buttonText,{color:Color}]}>{ButtonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      padding: 10,
      flexDirection: 'row',
      borderRadius: 3,
    },
    iconWrapper: {
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      fontWeight: 'bold',
    },
    btnTxtWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      
    },
  });