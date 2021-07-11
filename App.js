// @refresh reset
import  "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/Screens/SplashScreen';
import Starter from './src/Starter';
import Test from "./src/Screens/textScreen";
import Library from "./src/Screens/LibraryScreenT";
import TabS from "./src/Navigationf/Tab";
import AddPost from './src/Screens/LibraryScreenT/AddPost'




import { AuthProvider } from "./src/Navigationf/Stack/AuthStack/AuthProvider";
import {db,storage } from "./firebase";









import { useEffect } from "react/cjs/react.development";
import Discover from "./src/Screens/DiscoverScreenT";



const Drawer = createStackNavigator();






class Main extends Component{

  constructor(props){
    super(props);
    this.state={currentScreen :'SplashScreen'}
    setTimeout(() => {
      this.setState({currentScreen:'Starter'})
    }, 5000);
  }
  render(){
    
    const {currentScreen}=this.state;

    let mainScreen=currentScreen === 'SplashScreen' ? <SplashScreen /> : <Starter />
    return mainScreen;
  }

}

export default function App() {
  useEffect(()=>{
    
  
  },[])
    
    
  return (
    <NavigationContainer>
     <AuthProvider>
     <Drawer.Navigator headerMode={false}>
   <Drawer.Screen component={Main} name="Main" />
   {/* <Drawer.Screen component={Test} name="Main" /> */}
   {/* <Drawer.Screen component={AddPost} name="Main" /> */}

      </Drawer.Navigator>
     </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
