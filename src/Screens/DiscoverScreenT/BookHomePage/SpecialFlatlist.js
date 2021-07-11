import React, { Component } from "react";
import { Text, View, FlatList, Image,Animated,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";





export default function SpecialFlatList({
  data
}) {
  const [bColor, setBColor] = React.useState("");
  const navigation = useNavigation();

  console.log(data)

  return (
    <View >
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        
        
        renderItem={(item) => {
           
          return (
              
            <View
              style={{ justifyContent: "center", borderColor: bColor }}
            >
              <TouchableOpacity
                onPressIn={() => setBColor({ bColor: "dark" })}
                onPressOut={() => setBColor({ bColor: "transparent" })}
                onPress={()=>navigation.navigate('Detail',{detail:{Url:item.item.image.Url,title:item.item.key,Author:item.item.image.BookAuthor}})}
              >
             
                <Image
                  source={{ uri: item.item.image.Url }}
                  style={{
                    width: 90,
                    height: 130,
                    marginLeft: 20,
                    marginTop:5,
                    borderRadius: 20,
                  }}
                />
                
                
              </TouchableOpacity>
              
              

            </View>
            
          );
        }}
      />
      
    </View>
  );
}
