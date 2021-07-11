import React, { Component } from 'react'
import { Text, View,Image } from 'react-native';
import styles from './Styles';
import Line from "./Line";

export default class SplashScreen extends Component {
    
    render() {
        return (
            <View style={styles.container}>
           <Line height="15%" top={-18} left={74} deg="45deg" />
           <Line height="90%" top={-37} left={34} deg="0deg" />
           <View style={styles.imgContainer} > 
            <Image source={require("./../../assets/book.png")} style={styles.imgStyle} />
            <Text style={styles.labelImage}>Book Share</Text>
             </View>
            </View>
        )
    }
}
