import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import StoreScreen from './Store'



const Stack =createStackNavigator();
export default function Store() {
    
    return (
     <View style={{marginTop:30,flex:1}} >
     <Stack.Navigator headerMode={false}>
       <Stack.Screen name="Home" component={StoreScreen}/>
     </Stack.Navigator>
     </View>
    );
  }

