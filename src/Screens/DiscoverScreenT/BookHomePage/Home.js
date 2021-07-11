import { StatusBar } from "expo-status-bar";
import React, { Component ,useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import {storage,db} from "./../../../../firebase"

import { Icon, Input } from "native-base";
import WavyHeader from "./wave";
import { ScrollView } from "react-native-gesture-handler";
import TrendingBooks from "./TrendingBooks";
import HorizontalListedBook from "./HorizentalListedBook";
import SpecialFlatList from "./HorizentalListedBook"


const AddIcon = ({navigation}) => {
  return (
    <Image
      source={require("./../../../assets/add-256.jpg")}
      style={{
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};



export default function HomeScreen ({route}) {
  const [bColor, setBColor] = React.useState("");
  const [data,setData] =React.useState("")


  useEffect(() => {
    db
    .collection("Books")
    .get().then((snapshot)=>{
      var data1=snapshot.docs.map((doc)=>(
        {
          key:doc.id,
          title:doc.data().bookTitle,
          image : doc.data().titleUrl,
          rating : doc.data().rating,
          author :doc.data().bookAuthor,
          downloadURL : doc.data().BookDownloadUrl,
      }))
      setData(data1)
      console.log(data)
    })
  }, [route])








  return (
    // Wrapper that wrap the whole screen and id=1

    <View style={styles.container}>
     

      {/* Wave that is given below */}

      <WavyHeader customStyles={styles.svgCurve}
      WavHeight="60%"
       ViewBox="0 0 1440 10" Height={350} Top={225} />
      {/*header container that end on wavey line and id=2*/}
      <View style={styles.headerContainer}>
        {/* Search Container that contain search field and Icon id=3 */}
        <View style={styles.searchContainer}>
          <Icon name="search" style={styles.searchLeftIcon} />
          <Input
            placeholder="Search Books , Authors"
            placeholderTextColor="#808080"
            style={styles.searchInput}
          />
          <Icon name="filter" style={styles.searchRightIcon} />
        </View>
        {/* end id=3 */}
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
            Our Top Topic
          </Text>
          <HorizontalListedBook
            data={data}
            height={200}
            width={150}
            numColumns={2}
            BorderRadius={20}
            ListHeaderComponent={false}
            fontSize={16}
            justifyContent="center"
            // navigate={NavigateToDetailScreen}
          />
        </View>
      </View>
      {/* ends id=2 */}
      {/* view below wave that contain Subjects and id=4 */}
      {/* <View
        horizontal={true}
        style={{ flexDirection: "row", marginTop: 30, marginLeft: 20 }}
      >
        <HorizontalListedBook
          data={data}
          height={50}
          width={50}
          horizontal
          BorderRadius={50}
          ListHeaderComponent={AddIcon}
          fontSize={10}
          justifyContent="center"
        />
      </View>
      id=4 ends */}
      {/* View that contain trending books and id=5 */}
            {/* <View>
              <Text
                style={{
                  fontSize: 20,
                  fontStyle: "italic",
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Trending Books ////debuging
              </Text>
              <HorizontalListedBook
              data={data}
                height={140}
                width={90}
                BorderRadius={10}
                
                numColumns={3}
                ListHeaderComponent={false}
                fontSize={14}
                justifyContent="center"
                author={false}
            />
            
              </View> */}
            {/* id=5 ends */}
            {/* Best Share flatList id=6 */}
            {/* <View>
            <Text
                style={{
                  fontSize: 20,
                  fontStyle: "italic",
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Best Share
              </Text>
            <HorizontalListedBook
              data={data}
                height={150}
                width={100}
                BorderRadius={10}
                horizontal
                ListHeaderComponent={false}
                fontSize={14}
                justifyContent="center"
                author={true}
            />
            </View> */}
            {/* <View>
            <Text
                style={{
                  fontSize: 20,
                  fontStyle: "italic",
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                Recently Visited
              </Text>
            <HorizontalListedBook
              data={data}
                height={150}
                width={100}
                BorderRadius={10}
                horizontal
                ListHeaderComponent={false}
                fontSize={14}
                justifyContent="center"
                author={true}
            />
          </View> */}
    </View>

    // ends id=1
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 35,
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    borderRadius: 20,
    margin: 10,
  },
  searchLeftIcon: {
    left: 5,
  },
  searchRightIcon: {
    right: 5,
    height: 25,
    width: 25,
  },
  searchInput: {
    color: "#808080",
    fontSize: 12,
  },
});
