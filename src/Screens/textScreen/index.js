import { Item } from 'native-base';
import React, { Component,useEffect, useState,useContext } from 'react'
import { FlatList, Text, View, } from 'react-native'
import * as firebase from "firebase";
import {storage,db} from "./../../../firebase"
import  Icon  from "react-native-vector-icons/Ionicons";
import PostCard from '../../Component/FormComponent/PostCard';

import { WebView } from 'react-native-webview'

import { 
    Container, 
    } from '../../Style/style'
    
    import { AuthContext } from "../../Navigationf/Stack/AuthStack/AuthProvider";
    
       
    
  
export default  function Test() {
  const [Posts,setPost]=useState("");
  const {  UserDetail } = useContext(AuthContext);
     
            
          
        

          

       
                  
        return (
       
            <Container>
            <WebView
            source={{uri:"https://firebasestorage.googleapis.com/v0/b/book-share-d71eb.appspot.com/o/Books%2F01020Formal20Verification.pdf?alt=media&token=19f301fe-2a1b-4048-9bf6-1a383aee9405"}}
             
               
             />
        
            </Container>
        
        )
    } 



