import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { InputField, InputWrapper } from "../../Style/adPost";
import Icon from "react-native-vector-icons/Ionicons";
import { FloatingAction } from "react-native-floating-action";

import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import {AuthContext} from "./../../Navigationf/Stack/AuthStack/AuthProvider"
import * as firebase from "firebase";
import {storage,db} from "./../../../firebase"
import * as Progress from 'react-native-progress';
import { floor } from "react-native-reanimated";
import { TabRouter } from "@react-navigation/native";



const actions = [
  {
    text: "Take Photo",
    icon: "photo-camera",
    name: "bt_TakePhoto",
    position: 2,
  },
  {
    text: "Choose Photo",
    icon: "photo-library",
    name: "bt_ChoosePhoto",
    position: 1,
  },
];




export default function AddPost({navigation}) {
  const [post, setPost] = useState("");
  const [image,setImage]=useState(null);
  const [isUploading,setIsUpload]=useState(false);
  const [ImageProgress,setIMageProgress]=useState(0);

  
  useEffect(() => {
    (async () => {
      if (Platform.OS != "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status != "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      if (Platform.OS != "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        


        if (status != "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const SelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [6, 6],
      quality: 1,
    });
    
    if (!result.cancelled) {
         setImage(result.uri)
         

    }
  };
  

  // Upload Image Function
  const uploadImage = async (ImageP, NameImg,PostDescription,Time,User) => {
    const response = await fetch(ImageP);
    const blob = await response.blob();
    var ref = storage.ref().child("images/" + NameImg);
    var upload=ref.put(blob);
    setIsUpload(true);
    upload.on('state_changed',(snapshot)=>{
      var progress=(snapshot.bytesTransferred /snapshot.totalBytes) * 100;
      console.log(NameImg)
      setIMageProgress(progress);
      
    },(error)=>{
      alert(error)
    },
    ()=>{
      upload.snapshot.ref.getDownloadURL().then((downloadURL) => {
        setIsUpload(false);
        var time=firebase.firestore.FieldValue.serverTimestamp();
        var data={
          UserName:User.displayName,
          uid:User.uid,
          userImg:User.photoURL,
          postTime:time,
          post: PostDescription,
          postImg: downloadURL,
          
        }
        addPost(data,User)
        navigation.navigate('PostFeed',true);


      });
    }
    )
  };
  const addPost=async(data,User)=>{
     Promise.all([db.collection("Posts").add(data)])

  }
  const UploadPost=(User,ImageUrl,PostDescription,Time)=>{
    
    if(ImageUrl!=null){
          var namePic=User.uid+"###"+Math.floor(Math.random()*1000);
        uploadImage(ImageUrl, namePic,PostDescription,Time,User)
        .then(() => {
          
        })
        .catch((error) => {
          alert(error);
        });
    }
    else{
      var time=firebase.firestore.FieldValue.serverTimestamp();
        var data={
          UserName:User.displayName,
          uid:User.uid,
          userImg:User.photoURL,
          postTime:time,
          post: PostDescription,
          postImg: "none", 
        }
        addPost(data,User)
        navigation.navigate('PostFeed',true);
    }
  }
if(isUploading){
  return <View style={{justifyContent:'center',alignItems:'center',flex:1}} >
    <Progress.Bar progress={Math.floor(ImageProgress)} size={50} />
    
    <Text>Uploading ...</Text>
  </View>
}
else
 { return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              backgroundColor: "#f8f8f8",
            }}
          />
        )}
        <InputWrapper>
          <InputField
            placeholder="What's on your mind?"
            multiline
            numberOfLines={4}
            value={post}
            onChangeText={(content) => setPost(content)}
          />
          <TouchableOpacity
            style={{
              height: 40,
              width: 100,
              backgroundColor: "#2e64e5",
              borderRadius: 20,
              justifyContent: "center",
            }}

            onPress={() => {
  
    // //uid,image,postDescription,date,time,postId,
                 var date=new Date();
                 var Time={
                   day:date.getDate(),
                   time:date.getHours()+":"+date.getMinutes(),
                   Date:date
                 } 
                 var User=firebase.auth().currentUser;
                 
                 UploadPost(User,image,post,Time)
              }}
          >
            <Text
              style={{ textAlign: "center" }}   
            > Post
            </Text>
          </TouchableOpacity>
        </InputWrapper>

        <FloatingAction
          actions={actions}
          onPressItem={(name) => {
           
            if (name === "bt_TakePhoto") {
             TakeImage(setImage);
            } else if (name === "bt_ChoosePhoto") {
              SelectImage();
            }
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );}
}
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});


const TakeImage = async (setImage) => {
  try {

    const status = await ImagePicker.getCameraPermissionsAsync();
    if(status){
      
    let result = await  ImagePicker.launchCameraAsync({
      allowsEditing: true,
      storageOptions: {
        skipBackup: true,
        path: 'images'
        },
    });
    debugger;
    console.log(result.uri);

    if (!result.cancelled) {
   
     setImage(result.uri)

      
    }
    }
  } catch (e) {
    console.log(e);
  }
};