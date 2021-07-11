import React, { useState, useEffect, useContext } from "react";
import { Text, View, StatusBar, Image, Dimensions, ActivityIndicator } from "react-native";
import data from "./data";
import AppIntroSlider from "react-native-app-intro-slider";
import Test from "../Screens/textScreen";
import AsyncStorage from "@react-native-community/async-storage";
import Provider from "../Navigationf/Stack/AuthStack/Provider";

import { AuthContext } from "../Navigationf/Stack/AuthStack/AuthProvider";

import * as firebase from "firebase";

import TabS from "../Navigationf/Tab";

const { width, height } = Dimensions.get("screen");

function _renderItem({ item }) {
  return (
    <View
      style={{
        width,
        height,
        top: -70,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="hotpink" />
      <Image source={item.image.src} />
      <View style={{ width: "50%" }}>
        <Text style={{ textAlign: "center" }}>{item.image.Description}</Text>
      </View>
    </View>
  );
}

export default function Starter() {
  // let value=this.Load("@onBoard:key")

  // .then(e=>this.setState({showRealApp:e}))

  const [isFirstLaunch, setIsFirstLaunch] = React.useState("");
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

 
  React.useEffect(() => {
    
   const getVar=async()=>{
      await AsyncStorage.getItem("alreadyLaunched").then((value) => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        
       if (value === "true") {
       // No need to wait for `setItem` to finish, although you might want to handle errors
       setIsFirstLaunch(true);
    // unsubscribe on unmount
       
     } else {
       setIsFirstLaunch(false);
       

     }
     return subscriber; 

   }
   
   
   );}
      // Add some error handling, also you can simply do setIsFirstLaunch(null)
      getVar();
      
    
  }, []);

  function _onDone() {
    AsyncStorage.setItem("alreadyLaunched", "true");
         setIsFirstLaunch(true);
  
    
  }
  

  if(initializing){
    return <View style={{justifyContent:'center',alignItems:'center',flex:1}}> 
    <ActivityIndicator size="large" color="#0000ff"/>
      </View>
  }
  else if (!isFirstLaunch) {
    return (
      <View style={{ height: "100%", width: "100%", top: 35 }}>
        <AppIntroSlider
          renderItem={_renderItem}
          showDoneButton={true}
          showNextButton={false}
          doneLabel="Get Start"
          onDone={() => setIsFirstLaunch(() => {
            _onDone()
            
            })}
          showSkipButton={true}
          data={data}
          onSkip={_onDone}
        />
      </View>
    );
  } else {
    return user ? <TabS /> : <Provider />;
  }}

