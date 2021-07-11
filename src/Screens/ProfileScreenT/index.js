import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Profile from "./Profile";
import EditProfile from './EditProfile'



const Stack =createStackNavigator();
export default function ProfileScreen() {
    
    return (
     <View style={{marginTop:30,flex:1}} >
     <Stack.Navigator headerMode={false}>
       <Stack.Screen name="Profile" component={Profile}/>
       <Stack.Screen name="Edit Profile" component={EditProfile}/>

     </Stack.Navigator>
     </View>
    );
  }

