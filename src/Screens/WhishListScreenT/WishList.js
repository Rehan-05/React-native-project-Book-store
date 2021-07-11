import { Input } from 'native-base'
import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Dimensions, ScrollView, FlatList } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { SearchBar,data } from '../../Component/Data'

import Card from './../../Component/FormComponent/Card'




export default function Wish() {
    return (
        <View style={{flex:1}}>
        {/* header code */}
        
        {/* body part */}
        <View style={[styles.body]}>
        <FlatList
        data={data.item}
        ListHeaderComponent={SearchBar}
        renderItem={(item)=>{
            if(item.item.wishList){
                return <Card data={item} />
            }
            else{
                return null;
            }
        }}
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