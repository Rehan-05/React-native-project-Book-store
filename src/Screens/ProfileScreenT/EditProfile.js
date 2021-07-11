import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import WavyHeader from "../DiscoverScreenT/BookHomePage/wave";
import { AuthContext } from "../../Navigationf/Stack/AuthStack/AuthProvider";
import * as ImagePicker from "expo-image-picker";

function ImageProvider({ url }) {
  return (
    <Image
      source={{ uri: url }}
      style={{
        height: 80,
        width: 80,
        borderRadius: 50,
        position: "absolute",
      }}
    />
  );
}

export default function EditProfile({ navigation }) {
  const { UserDetail, UpdateProfile } = useContext(AuthContext);
  const [userDetail, SetUserDetail] = useState(UserDetail);
  const [image, setImage] = useState(null);
  const [Name, setName] = useState(null);
  const [NameChange, setNameChange] = useState();
  const [NImage, setNImage] = useState(null);

  useEffect(() => {
    UserDetail().then((e) => {
      SetUserDetail(e);
      setImage(e.photoURL);
      setName(e.displayName);
    });
    if (Platform.OS !== "web") {
      let status;
      ImagePicker.getMediaLibraryPermissionsAsync().then((e) => {
        if (e.status !== "granted") {
          ImagePicker.requestMediaLibraryPermissionsAsync();
        }
      });
    }
  }, []);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
      setNImage(result.uri);
    }
  };

  return (
    <View>
      <WavyHeader
        customStyles={[styles.svgCurve]}
        ViewBox={"0 0 1440 250"}
        Height={60}
        Top={55}
        WavHeight="110%"
      />
      <View style={{ width: "100%", height: 160 }}>
        <View style={{ justifyContent: "center", top: 10 }}>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            Edit Your Profile
          </Text>
        </View>

        <View style={{ marginTop: 15, marginLeft: 30 }}>
          <TouchableOpacity style={{ height: 100 }} onPress={selectImage}>
            <Icon
              name="add-circle-sharp"
              style={{ elevation: 1, top: 57, left: 45 }}
              size={30}
              color="blue"
            />
            {image != null ? (
              <ImageProvider url={image} />
            ) : (
              <ImageProvider url="http://clipart-library.com/images_k/person-silhouette-vector/person-silhouette-vector-16.png" />
            )}
          </TouchableOpacity>
          <Text
            style={{ fontSize: 20, right: 10, top: 15, position: "absolute" }}
          >
            {Name}
          </Text>
        </View>
      </View>
      <View style={{ width: "90%", alignSelf: "center" }}>
        <TextInput
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 10,
            borderColor: "blue",
          }}
          placeholder="Enter your Name"
          value={NameChange}
          onChangeText={(text) => setNameChange(text)}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            if (NameChange != null && NImage != null) {
              UpdateProfile(NameChange, NImage, navigation);
            } else if (NameChange == null && NImage != null) {
              UpdateProfile(Name, NImage, navigation);
            } else if (NameChange != null && NImage == null) {
              UpdateProfile(NameChange, image, navigation);
            }
            if (NameChange == null && NImage == null) {
              alert("Please Enter Your name or Select your Photo");
            }
          }}
          style={{
            margin: 10,
            height: 40,
            backgroundColor: "#2e64e5",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
});
