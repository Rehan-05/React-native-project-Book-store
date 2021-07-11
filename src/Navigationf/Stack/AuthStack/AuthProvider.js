import React, { useState, createContext } from "react";

import * as firebase from "firebase";
import * as Google from "expo-google-app-auth";

import * as AppAuth from "expo-app-auth";

import * as GoogleSignIn from "expo-google-sign-in";

import { storage, db } from "./../../../../firebase";
import { Image } from "native-base";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const addUser=async(UserData,user)=>{
   await db.collection("AppDataBase")
      .doc("Users")
      .collection(user.uid)
      .doc(user.email)
      .set(UserData).catch((error)=>{
        console.log(error)
      })
  }
  const updateUser=async(UserData,user)=>{
    await db.collection("AppDataBase")
       .doc("Users")
       .collection(user.uid)
       .doc(user.email)
       .update(UserData).catch((error)=>{
         console.log(error)
       })
   }

  const uploadProfile = async ( DisplayName,ImageP,ImgName,User,navigation) => {
    const response = await fetch(ImageP);
    const blob = await response.blob();
    var metaData = {
      contentType: "image/jpeg",
      likes: 30,
      comments: 10,
    };
    var ref = storage
      .ref()
      .child("UserProfileImages/" + User.uid + "/" + ImgName);
    var uploadTask = ref.put(blob, metaData);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //handle upload time event
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          User.updateProfile({
            displayName: DisplayName,
            photoURL: downloadURL,
          })
            .then(function () {
              var UserData={
                displayName:User.displayName,
                photoURL:downloadURL
              }
              if (navigation != undefined) {
                //update case
                updateUser(UserData,User)
                alert("update successfully");
                navigation.navigate("Profile",true);
              }else{
                //new User Case
                
                addUser(UserData,User);
              }
            })
            .catch(function (error) {
              alert(error);
            });
        });
      }
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            if (firebase.auth.AuthCredential) {
              alert("Please Enter correct Email and Password");
            } else {
              alert(e);
            }
          }
        },
        register: async (email, password, image, name, isUpload) => {
          try {
            if (isUpload) {
              var ImgName = email + Math.random() * 100;
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((UserCredential) => {
                  uploadProfile(name, image, ImgName, UserCredential.user);
                });
            } else {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((UserCredential) => {
                  if (UserCredential.user) {
                    UserCredential.user
                      .updateProfile({
                        displayName: name,
                        photoURL: image,
                      })
                      .then(() => {
                        var UserData = {
                          displayName: name,
                          photoURL: image,
                          uid: UserCredential.user.uid,
                          email: UserCredential.user.email,
                        };
                        addUser(UserData,UserCredential.user)
                      });
                  }
                })
                .catch((error) => {
                  console.warn(`error:, ${error}`);
                });
            }
          } catch (e) {
            alert(e);
          }
        },

        signInWithGoogleAsync: async () => {},

        logOut: async () => {
          try {
            await firebase.auth().signOut();
          } catch (e) {
            alert(e);
          }
        },
        UserDetail: async () => {
          try {
            let User = firebase.auth().currentUser;
            return User;
          } catch (error) {}
        },
        UpdateProfile: (DisplayName, photoUrl, navigation) => {
          let User = firebase.auth().currentUser;
          let time = new Date();
          let ImgName =
            DisplayName +
            " " +
            time.getHours() +
            "-" +
            time.getMinutes() +
            "-" +
            time.getSeconds();
          let UploadPhoto = uploadProfile(
            DisplayName,
            photoUrl,
            ImgName,
            User,
            navigation
          );
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
