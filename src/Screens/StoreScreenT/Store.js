import { Input } from 'native-base'
import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Dimensions, ScrollView, FlatList } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'

import Card from './../../Component/FormComponent/Card'

export const data={
    item:[
        {
            id:"1",
            Title:"At War On The Gothic",
            Author:"Mitch Weiss",
            Rating:3,
            description: "The UnTold Story of Courage and Sacrifice",
            src:require("./../../assets/3.png"),
            wishList:true
        },
        {
            id:"2",
            Title:"Learn for Life The COOKBOOK",
            Author:"Mitch Weiss",
            Rating:1,
            description: "Learn Cocking in 15 Days",
            src:require("./../../assets/Cookery.png"),
            wishList:false
        },
        {
            id:"3",
            Title:"Hery Pi",
            Author:"Mitch Weiss",
            Rating:5,
            description: "The UnTold Story of Courage and Sacrifice",
            src:require("./../../assets/Children.png"),
            wishList:true
        },
        {
            id:"4",
            Title:"Antony BEEVOR",
            Author:"Mitch Weiss",
            Rating:2,
            description: "The UnTold Story of Courage and Sacrifice",
            src:require("./../../assets/2.png"),
            wishList:false
        },
    ]
}



export function SearchBar() {
    return(
        <View style={[styles.header]}>
        
      <View style={styles.searchContainer}>
          <Icon name="search" style={styles.searchLeftIcon} />
    
          <Input
            placeholder="Search Books , Authors"
            placeholderTextColor="#808080"
            style={styles.searchInput}
          />
          <Icon name="filter" style={styles.searchRightIcon} />

        </View>
        </View>  
    )
}








export default function StoreScreen() {
    return (
        <View style={{flex:1}}>
        {/* header code */}
        
         
        
        
        
        {/* body part */}
        <View style={[styles.body]}>
        <FlatList
        data={data.item}
        ListHeaderComponent={SearchBar}
        renderItem={(item)=>(
            <Card data={item} />
        )}
        keyExtractor={(item)=>item.id}
         />    
        </View> 



        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        flex:1
    },
    svgCurve: {
        
        position: "absolute",
        width: Dimensions.get("window").width,
      },
    body:{
        flex:9,
            
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#000",
        height: 40,
        borderRadius: 20,
        margin: 10,
      },
      searchLeftIcon: {
        left: 5,
      },
      searchRightIcon: {
        right: 5,
        height: 25,
        width: 25,
      },
      searchInput: {
        color: "#808080",
        fontSize: 12,
      },
})