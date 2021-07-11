import React from "react";
import { Button, View } from "react-native";

const images = {
    Book: {
      src:require("./../assets/undraw_Books_l33t.png"),
      Description:"Share your favourite book with your Friends and Family",
      getStartButton:()=>{ return null}
    },
    Lover:{
      src: require("./../assets/undraw_book_lover_mkck.png"),
      Description:"Discover 2 Million books Shelved Online",
      getStartButton:()=>{ return null}
    },
    Business: {
      src:require("./../assets/undraw_business_shop_qw5t.png"),
      Description:"Buy and Sells Books With Us",
      getStartButton:()=>{
        
        return <View style={{position:'absolute',bottom:70}}>
          <Button  title="Get Start" onPress={()=>{
            
          }} />
        </View>
      }
    },
  };
  
  const data = Object.keys(images).map((i) => ({
    key: i,
    title: i,
    image: images[i]
  }));
  export default data;