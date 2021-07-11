import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./BookHomePage/Home"
import { View } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";



import DetailScreen from "./BookHomePage/DetailsScreen/index";
import AddBook from './BookHomePage/AddBook'
import Download from "./Download"


const Stack =createStackNavigator();



export default function Discover () {
    
    return (
     <View style={{marginTop:30,flex:1}} >
     <Stack.Navigator >
       <Stack.Screen
       options={({navigation})=>({
            title: "Library",
            headerTitleAlign:'center',
          headerStyle: {
            backgroundColor: "#f9fafd",
            shadowColor: "#f9fafd",
            elevation: 0,
           
          },
            headerRight: () => {
            return (
              <View style={{ marginRight: 10,flexDirection:'row' }}>
              <View style={{justifyContent:'center'}}>
              
              </View>
                <Icon.Button
                  name="add-circle-outline"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate("Upload Book")}
                />
              </View>
            );
          }}
        )}
        name="Home" component={HomeScreen}/>
       <Stack.Screen name="Detail" component={DetailScreen}/>
       <Stack.Screen name="Upload Book" component={AddBook}/>
       <Stack.Screen name="Download Book" component={Download}/>
     </Stack.Navigator>
     </View>
    );
  }

