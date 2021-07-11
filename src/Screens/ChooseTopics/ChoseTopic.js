
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,

  StatusBar,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";

import data from './data'

import WavyHeader from "../../Screens/DiscoverScreenT/BookHomePage/wave";


export default class ChoseTopic extends Component {
  constructor(props){
    super(props);
    this.state={
      data:''
    }
  }
  state={
    data:''
  }
  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyBvLylt0qOrZQyghGMCj75n-jbywsj9tps')
      .then((data) => data.json())
      .then((data2) => {
        this.setState({data:data2.items})
        //console.log(this.state.data[0].volumeInfo.imageLinks.thumbnail)
       //console.log(this.state.data[0].volumeInfo.imageLinks.thumbnail)

       // console.log(this.state.data.items[0].volumeInfo.imageLinks.thumbnail)
        })
  }
      
  render() {
    return (
      <View>
      <StatusBar backgroundColor="pink" />
        <WavyHeader
          customStyles={styles.svgCurve}
          ViewBox={"0 0 1440 200"}
          Height={100}
          Top={70}
          WavHeight="60%"
        />
        <Text style={{fontSize:24,fontStyle:'italic',marginLeft:10,color:"#fff"}}>WellCome</Text>
        <Text style={{fontSize:24,fontStyle:'italic',marginLeft:10,color:"#fff"}}>Choose The Topics</Text>
        <View style={{top:80}} >
        <FlatList 
            
            data={this.state.data}
            horizontal={false}
            renderItem={({item}) => {
              return<View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Image
              style={{width:80,height:80,borderRadius:50,margin:5,alignSelf:'center'}}
              source={{uri:item.volumeInfo.imageLinks.thumbnail}}
            />
            <Text style={{textAlign:"center"}}>Topic</Text>
            {/* {item.volumeInfo.title} */}
          </View>
            }}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item) => item.id}
             />

            <TouchableOpacity activeOpacity={0.5}   >
            <Text style={{textAlign:'center',margin:10,color:'blue'}}>Load More</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}  style={{backgroundColor:'blue',width:'100%'}} >
            <Text style={{textAlign:'center',margin:10,color:'#fff'}}>Apply</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
y