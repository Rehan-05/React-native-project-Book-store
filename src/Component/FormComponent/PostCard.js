import React, { Component } from 'react'
import { Text, View } from 'react-native'
import  Icon  from "react-native-vector-icons/Ionicons";

import { 
    Card, 
    Container, 
    UserInfo,UserImage,
     UserInfoText, 
     UserName, 
     PostTime, 
     PostText,
     PostImg, 
     InteractionWrapper,
     Interaction,
     InteractionText,
     Divider
    } from './../../Style/style'


    export default  function PostCard({item}) {
        var likeIcon = item.liked ? 'heart' : 'heart-outline';
        var likeIconColor = item.liked ? '#2e64e5' : '#333';
        var likeText;
        if (item.likes >= 1) {
            likeText = item.likes + ' Likes';
          } else {
            likeText = 'Like';
          }
          var commentText;
          if (item.comments >= 1) {
            commentText = item.comments + ' Comments';
          } else {
            commentText = 'Comment';
          }
        
        
        return (
            <Card>
            <UserInfo>
            <UserImage source={{uri:item.userImg}}/>
            <UserInfoText>
                <UserName>{item.userName}</UserName>
                <PostTime>{item.postTime}</PostTime>
            </UserInfoText>
            </UserInfo>
            <PostText>
                {item.post}
            </PostText>
            {item.postImg!='none'?<PostImg source={{uri:item.postImg}}/>:<Divider/>}
            <InteractionWrapper>
                <Interaction active={item.liked}>
                    <Icon name={likeIcon} size={25} color={likeIconColor} />
                    <InteractionText>{likeText}</InteractionText>
                </Interaction>
                <Interaction>
                    <Icon name='md-chatbubble-outline' size={25} color="#2e64e5" />
                    <InteractionText>{commentText}</InteractionText>
                </Interaction>
            </InteractionWrapper>
            </Card>
            
        
        )
    }


