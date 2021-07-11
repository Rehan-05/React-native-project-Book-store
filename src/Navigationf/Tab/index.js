import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Discover from "../../Screens/DiscoverScreenT";
import Library from "../../Screens/LibraryScreenT";
import Store from "../../Screens/StoreScreenT";
import WishList from "../../Screens/WhishListScreenT";
import ProfileScreen from "../../Screens/ProfileScreenT";
import  Icon  from "react-native-vector-icons/Ionicons";
import CustomIcon from "./icon";
import CustomMaterialIcon from "./CustomMaterialIcon";
import Test from './../../Screens/textScreen'




const Tab = createBottomTabNavigator();


export default function TabS() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#2e64e5",
        inactiveTintColor: "#808080",
        
      }}
    >
      <Tab.Screen
        name="Discover"
        options={{
          tabBarIcon: ({ color}) => (
            <Icon name="search" color={color} size={15} />
          ),
        }}
        component={Library}
      />
      <Tab.Screen name="Library" component={Discover}
      options={{
        tabBarIcon:({color})=>(
        <Icon name='library' color={color} size={15} />
        )
      }}
       />
      <Tab.Screen name="Store" component={Store}
      options={{
        tabBarIcon:({color})=>(
          <CustomIcon name="shopping-store" color={color} size={15} />
        )
      }}
       />
      <Tab.Screen name="Wish List" component={WishList} 
      options={{
        tabBarIcon:({color})=>(
          <CustomIcon name="heart" color={color} size={15} />
        )
      }}

      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
        tabBarIcon:({color})=>(
          <CustomMaterialIcon name="account" color={color}size={15} />
        )
        
      }}
      
      />
      {/* <Tab.Screen name="Test" component={Test} 
        options={{
        tabBarIcon:({color})=>(
          <CustomMaterialIcon name="circle" color={color}size={15} />
        )
        
      }}
      
      /> */}
    </Tab.Navigator>
  );
}
