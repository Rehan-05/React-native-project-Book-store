import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { Text, View } from "react-native";
import { createStackNavigator, Header } from "@react-navigation/stack";

import * as firebase from 'firebase';

import FontAwesome from "react-native-vector-icons/FontAwesome";

import SignUp from "../../../Screens/Sign&SignUp Ui/SignUp";
import SignIn from "../../../Screens/Sign&SignUp Ui/SignIn";

const Stack = createStackNavigator();

export default AuthStack = () => {
  
  return (
    <View style={{marginTop:30,flex:1}}>
    <Stack.Navigator >
      <Stack.Screen
        name="Login"
        options={{ header: () => null }}
        component={SignIn}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={({ navigation }) => ({
          title: "Sign Up",
          headerTitleAlign:'center'
          ,
          headerStyle: {
            backgroundColor: "#f9fafd",
            shadowColor: "#f9fafd",
            elevation: 0,
            
          },
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
    </View>
  );
};
