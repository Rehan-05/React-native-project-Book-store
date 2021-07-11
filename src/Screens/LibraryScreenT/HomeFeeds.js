import { Item } from 'native-base';
import React, { Component,useState,useEffect } from 'react'
import { FlatList, Text, View, } from 'react-native'
import * as firebase from "firebase";
import {storage,db} from "./../../../firebase"
import  Icon  from "react-native-vector-icons/Ionicons";
import PostCard from '../../Component/FormComponent/PostCard';

import { 
    
    Container, 
   
     
    } from '../../Style/style'
  
      

export default  function PostFeeds({route}) {
  const [Posts,setPost]=useState("");
  useEffect(() => {
    db
    .collection("Posts").orderBy('postTime','desc')
    .get().then((snapshot)=>{
      var data=snapshot.docs.map((doc)=>(
        {id:doc.id,
          userName: doc.data().UserName,
          userImg: doc.data().userImg,
          // postTime: doc.data().postTime,
          post: doc.data().post,
          postImg: doc.data().postImg,
          liked: false,
          uid:doc.data().uid,   
      }))
      setPost(data)
      // console.log(Posts)
    })
  }, [route])
        return (
       
            <Container>
            
            <FlatList 
            data={Posts}
            showsVerticalScrollIndicator={false}
            keyExtractor={item=>item.id}
            renderItem={({item})=>{
            return <PostCard item={item} />}}
             />
            </Container>
        
        )
    }



