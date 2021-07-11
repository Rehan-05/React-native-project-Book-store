import React from "react";
import { Button, View } from "react-native";

const images = {
    Book: {
      src:require("./../../assets/undraw_Books_l33t.png"),
      Description:"Share your favourite book with your Friends and Family",
      
    },
    Lover:{
      src: require("./../../assets/undraw_book_lover_mkck.png"),
      Description:"Discover 2 Million books Shelved Online",
      
    },
    Business: {
      src:require("./../../assets/undraw_business_shop_qw5t.png"),
      Description:"Buy and Sells Books With Us",
    },
    Book1: {
      src:require("./../../assets/undraw_Books_l33t.png"),
      Description:"Share your favourite book with your Friends and Family",
      
    },
    Lover1:{
      src: require("./../../assets/undraw_book_lover_mkck.png"),
      Description:"Discover 2 Million books Shelved Online",
      
    },
    Business1: {
      src:require("./../../assets/undraw_business_shop_qw5t.png"),
      Description:"Buy and Sells Books With Us",
    },
    Book11: {
      src:require("./../../assets/undraw_Books_l33t.png"),
      Description:"Share your favourite book with your Friends and Family",
      
    },
    Lover11:{
      src: require("./../../assets/undraw_book_lover_mkck.png"),
      Description:"Discover 2 Million books Shelved Online",
      
    },
    Business11: {
      src:require("./../../assets/undraw_business_shop_qw5t.png"),
      Description:"Buy and Sells Books With Us",
    },
  };
  
  const data = Object.keys(images).map((i) => ({
    key: i,
    title: i,
    image: images[i]
  }));
  export default data;