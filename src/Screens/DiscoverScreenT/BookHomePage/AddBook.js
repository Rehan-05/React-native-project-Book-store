import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as DocumentPicker from "expo-document-picker";
import * as Progress from "react-native-progress";
import { AuthContext } from "./../../../Navigationf/Stack/AuthStack/AuthProvider";
import * as ImagePicker from "expo-image-picker";
import { db, storage } from "./../../../../firebase";
//upload book on firebase storage
//Book id
//book Type
//Book Rating
//Book Title 1s
//Book author 1
//Book title page Image 1

//uploaded by
//Description of Book 1
export default function AddBook({navigation}) {
  const dummy = {
    name: "",
    size: 0,
    type: "",
    uri: "null",
  };
  const dummyImg = {
    height: 0,
    type: "image",
    uri: "null",
    width: 0,
  };
  const [title, setTitle] = useState(null);
  const [Type, setType] = useState(null);
  const [Author, setAuthor] = useState(null);
  const [Description, setDescription] = useState(null);
  const [Rating, setRating] = useState(null);

  const [titleImage, setTitleImage] = useState(dummyImg);
  const [BookPdf, setBookPdf] = useState(dummy);

  const [isUploading, setIsUpload] = useState(false);
  const [ImageProgress, setIMageProgress] = useState(0);
  const { UserDetail } = useContext(AuthContext);
  const addBook = async (data) => {
    console.log(data);
    await db
      .collection("Books")
      .add(data)
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  const uploadBook = async (
    BookTitle,
    BookType,
    BookAuthor,
    BookRating,
    BookDescription,
    titleImage,
    BookFile,
    User,
    navigation
  ) => {
    
    setIsUpload(true);
    const response = await fetch(BookFile);
    const blob = await response.blob();
    var ref = storage.ref().child("Books/" + BookTitle);
    var uploadBook = ref.put(blob);
    uploadBook.on(
      "state_changed",
      (snapshot) => {
        // console.log(NameImg)
        setIMageProgress(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        uploadBook.snapshot.ref.getDownloadURL().then(async (BookPdfUrl) => {
          const responseImg = await fetch(titleImage);
          const blobImg = await responseImg.blob();
          var TitleRef = storage.ref().child("Books/" + BookTitle+"10");
          var upload = TitleRef.put(blobImg);
          var data;
          upload.on(
            "state_changed",
            (snapshot) => {
              // console.log(NameImg)
              setIMageProgress(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
            },
            (error) => {
              alert(error);
            },
            () => {
              upload.snapshot.ref.getDownloadURL().then((downloadURL) => {
                data = {
                  UploadedBy: User,
                  bookTitle: BookTitle,
                  bookType: BookType,
                  bookAuthor: BookAuthor,
                  rating: BookRating,
                  bookDescription: BookDescription,
                  BookDownloadUrl: BookPdfUrl,
                  titleUrl: downloadURL,
                };
                addBook(data);
               
                setIsUpload(false);
                navigation.navigate("Home",true)
              });
            }
          );
        });
      }
    );
  };

  if (isUploading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Progress.Bar progress={Math.floor(ImageProgress)} size={50} />

        <Text>uploading.....</Text>
      </View>
    );
  } else {
    return (
      <View style={{ backgroundColor: "#f9fafd", flex: 1 }}>
        <Text style={{ fontSize: 20 }}> Enter Book Information to Upload </Text>
        <View>
          <TextInput
            placeholder="  Enter Book Title"
            onChangeText={(text) => {
              setTitle(text);
            }}
            style={styles.inpText}
          />
          <TextInput
            placeholder="  Enter Book Type"
            onChangeText={(text) => {
              setType(text);
            }}
            style={styles.inpText}
          />
          <TextInput
            placeholder="  Enter Book Author"
            onChangeText={(text) => {
              setAuthor(text);
            }}
            style={styles.inpText}
          />
          <TextInput
            placeholder="  Enter Book Rating"
            onChangeText={(text) => {
              setRating(text);
            }}
            style={[styles.inpText]}
          />

          <TextInput
            multiline={true}
            numberOfLines={3}
            placeholder="  Enter Book Description"
            onChangeText={(text) => {
              setDescription(text);
            }}
            style={[styles.inpText, , { height: 80, borderRadius: 10 }]}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.selBtn}
              onPress={() => {
                DocumentPicker.getDocumentAsync({
                  type: "*/*",
                  copyToCacheDirectory: true,
                })
                  .then((BookDetail) => {
                    setBookPdf(BookDetail);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
            >
              <Icon name="add" size={25} color="#fff" />
              <Text style={styles.btnText}>Add Book</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 10 }}>{`${BookPdf.name}  \n       ${
              BookPdf.size / 1000000
            } Mb`}</Text>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.selBtn}
              onPress={() => {
                ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                  allowsEditing: true,

                  quality: 1,
                })
                  .then((e) => {
                    setTitleImage(e);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
            >
              <Icon name="add" size={25} color="#fff" />
              <Text style={styles.btnText}>Choose Book Title Page</Text>
            </TouchableOpacity>
            {titleImage.uri !== "null" ? (
              <Image
                source={{ uri: titleImage.uri }}
                style={{ height: 60, width: 60, left: 90 }}
              />
            ) : null}
          </View>
          <TouchableOpacity
            style={[styles.selBtn, { justifyContent: "center", left: 60 }]}
            onPress={() => {
              var uid;
              UserDetail()
                .then((user) => {``
                  uid = user.uid;
                  if(Type!==null&&title!==null&&Author!==null&&Rating!==null&&Description!==null&&titleImage.uri!=="null"&&BookPdf.uri!=="null"){
                    uploadBook(
                    title,
                    Type,
                    Author,
                    Rating,
                    Description,
                    titleImage.uri,
                    BookPdf.uri,
                    uid,
                    navigation
                  ).then((e)=>{
                  console.log(e)
                }).catch((e)=>{
                  alert(e)
                })
              }else{
                alert("Provide all data")
              }
                })
                .catch((e) => {
                  alert(e);
                });

             
            }}
          >
            <Text style={styles.btnText}>Upload Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inpText: { height: 40, width: "97%", margin: 5, borderWidth: 1 },
  selBtn: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    width: "50%",
    margin: 5,
    backgroundColor: "blue",
  },
  btnContainer: { flexDirection: "row", alignItems: "center" },
  btnText: { color: "#fff", fontSize: 14 },
});
