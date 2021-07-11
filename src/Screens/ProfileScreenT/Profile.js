import { Row } from "native-base";
import React, { Component, useContext, useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

import { AuthContext } from "../../Navigationf/Stack/AuthStack/AuthProvider";

import WavyHeader from "../DiscoverScreenT/BookHomePage/wave";
import TouchAbleButton from "./Style";
import {db} from "./../../../firebase"

export default function Profile({ navigation,route }) {
  const { logOut, UserDetail } = useContext(AuthContext);
  const [userDetail, setDetail] = useState("");
  const [image, setImage] = useState(null);
  const [Name, setName] = useState();
  useEffect(() => {
    UserDetail().then((e) => {
      
     var data= db.collection("AppDataBase").doc("Users").collection(e.uid).doc(e.email)
          .get().then((data1)=>{
            setImage(data1.data().photoURL);
      setName(data1.data().displayName);
          })
          
          .catch(function (error) {
      
          })
          
      
      
    });
  }, [route]);

  return (
    <View style={[styles.Container]}>
      <View style={styles.Header}>
        <View>
          <WavyHeader
            customStyles={[styles.svgCurve]}
            ViewBox={"0 0 1440 250"}
            Height={60}
            Top={55}
            WavHeight="110%"
          />
          <View style={styles.UserInfoSec}>
            <Text
              style={styles.NameStyle}
            >
              {Name}
            </Text>

            <Image
              source={{uri:image}}
              style={styles.ProfilePic}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row", top: 35 }}>
          <View>
            <Text style={styles.NumInfOStyle}> 21 </Text>
            <Text style={styles.StrInfoStyle}> Books </Text>
          </View>
          <View>
            <Text style={styles.NumInfOStyle}> 21 K </Text>
            <Text style={styles.StrInfoStyle}> Follower </Text>
          </View>
          <View>
            <Text style={styles.NumInfOStyle}> 21 </Text>
            <Text style={styles.StrInfoStyle}> Following </Text>
          </View>
          <TouchableOpacity
            style={styles.edtBtn}
            onPress={()=>{navigation.navigate('Edit Profile')}}
          >
            <Text
              style={styles.edtBtnTxt}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ActSec}>
        <Text>Account</Text>
        <TouchAbleButton text="My Cart" icon="cart" Color="#2e64e5" />
        <TouchAbleButton text="Purchases" icon="card" Color="#2e64e5" />
        <TouchAbleButton text="Account" icon="person" Color="#2e64e5" />
      </View>

      <View style={styles.setSec}>
      <Text>Setting</Text>

        <TouchAbleButton text="Night Mode" icon="ellipse" Color="#000" />
        <TouchAbleButton
          text="Notification"
          icon="notifications"
          Color="#2e64e5"
        />
        <TouchAbleButton
          text="Language"
          icon="ios-language-outline"
          Color="#2e64e5"
        />
        <TouchAbleButton
          text="Help"
          icon="md-help-circle-outline"
          Color="#2e64e5"
        />
        <TouchAbleButton
          text="Sign Out"
          icon="person"
          Color="#2e64e5"
          onPress={() => logOut()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  Container: {
    flex: 1,
  },
  Header: {
    width: "100%",
    height: 160,
  },
  ProfilePic: {
    height: 80,
    width: 80,
    borderRadius: 50,
    position: "absolute",
    right: 10,
    top: 5,
  },
  NumInfOStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#404245",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    textAlign: "center",
  },
  StrInfoStyle: { fontSize: 10, textAlign: "center" },
  NameStyle:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 20,
    top: -5,
  },
  UserInfoSec:{ flexDirection: "row", marginTop: 40 },
  edtBtn:{
    position: "absolute",
    right: 10,
    top: 35,
    height: 30,
    width: 80,
    backgroundColor: "#2e64e5",
    borderRadius: 5,
  },
  edtBtnTxt:{
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    top: 2,
  },
  ActSec:{ marginTop: 30, marginLeft: 20, marginRight: 20 },
  setSec:{ marginTop: 30, marginLeft: 20, marginRight: 20 }
});
