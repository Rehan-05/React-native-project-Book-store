import { Row } from "native-base";
import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from "react-native-shared-element";

import FontAwesome from "react-native-vector-icons/FontAwesome";


export default function DetailScreen({ navigation, route }) {
  const { detail } = route.params;

  return (
    <View style={{ top: 5 }}>
      <View
        style={{
          height: "53%",
          alignItems: "center",
          backgroundColor: "#c9c9c9",
        }}
      >
        <Image
          source={{ uri: detail.Url }}
          style={{
            backgroundColor: "#125",
            height: 300,
            width: 200,
            borderRadius: 20,
            alignItems: "center",
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 10,
            top: 10,
            backgroundColor: "#c9c9c9",
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="long-arrow-left" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <View>
        <View style={{flexDirection:'row'}} >
         <View>
         <Text style={{ textAlign: "left", fontSize: 20, fontWeight: "bold" }}>
            {detail.title}
          </Text>
          <Text style={styles.AuthorName}>
            by {detail.Author}
          </Text>
         </View>
          <View style={{position:'absolute',right:5}}>
          {detail.Status === "paid" ? (
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={[styles.btnStyle,{right:5,top:5}]}>
                <Text style={styles.btnText}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnStyle,{right:90,top:5}]}>
                <Text style={styles.btnText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
            onPress={()=>navigation.navigate("Download Book",{detail:detail.downloadUrl})}
              style={[styles.btnStyle,{right:5,top:5}]}
            >
              <Text style={styles.btnText}>Download</Text>
            </TouchableOpacity>
          )}
          </View>
        </View>
        <Text>
          A book is a medium for recording information in the form of writing or
          images, typically composed of many pages (made of papyrus, parchment,
          vellum, or paper) bound together and protected by a cover.[1] The
          technical term for this physical arrangement is codex (plural,
          codices). In the history of hand-held physical supports for extended
          written compositions or records, the codex replaces its predecessor,
          the scroll. A single sheet in a codex is a leaf and each side of a
          leaf is a page.
        </Text>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  AuthorName:{
    textAlign: "left", 
    fontSize: 17,
    fontWeight: "bold" 
  }
  ,
  btnStyle:{
    backgroundColor: "#2e64e5",
    position: "absolute",
    height: 40,
    borderRadius: 10,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    
  }
  ,btnText:{
    fontSize:15,
    color:"#fff"
  },
})