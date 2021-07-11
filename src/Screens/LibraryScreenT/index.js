import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PostFeeds from "./HomeFeeds";
import AddPost from "./AddPost";
import  Icon  from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View, Text } from "react-native";

const Stack = createStackNavigator();

export default function Library() {
  return (
    <View style={{flex:1,marginTop:30}}>
    <Stack.Navigator >
      <Stack.Screen
        options={({navigation})=>({
            title: "Feeds",
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
                  onPress={() => navigation.navigate("AddPost")}
                />
              </View>
            );
          }}
        )}
        name="PostFeed"
        component={PostFeeds}
      />
      <Stack.Screen name="AddPost" component={AddPost} />
    </Stack.Navigator>
    </View>
  );
}
