import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Wish from './WishList'



const Stack =createStackNavigator();
export default function WishList () {
    
    return (
     <View style={{marginTop:30,flex:1}} >
     <Stack.Navigator headerMode={false}>
       <Stack.Screen name="Home" component={Wish}/>
     </Stack.Navigator>
     </View>
    );
  }

