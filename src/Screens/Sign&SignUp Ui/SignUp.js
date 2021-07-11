import React, { useContext, useState ,useEffect} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import FormButton from "../../Component/FormComponent/FormButton";
import FormInput, {
  SelectPhoto,
} from "../../Component/FormComponent/FormInput";
import SocialButton from "../../Component/FormComponent/SocialButton";
import { AuthContext } from "../../Navigationf/Stack/AuthStack/AuthProvider";

var ImgUrl="https://firebasestorage.googleapis.com/v0/b/book-share-d71eb.appspot.com/o/PngItem_2560570.png?alt=media&token=cdc87b9c-6060-496c-9d79-f35ae1700505"

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [image, setImage] = useState(ImgUrl);
  const [password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [IsUpload, setIsUpload] = useState(false);


  const { register } = useContext(AuthContext);
  const [enable, setEnable] = useState(true);


 
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
    })();
  }, []);

  const SelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      
      quality: 1,
    });
    
    if (!result.cancelled) {
         setImage(result.uri)
         setIsUpload(true)
    }
  };


  return (
    <View style={styles.container}>
      <Image
        source={{uri:image}}
        style={styles.ImgStyle}
      />

      <View>
        <Text style={styles.text}>Create An acount</Text>
      </View>

      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
        <FormInput
          labelValue={password}
          onChangeText={(Name) => setName(Name)}
          PlaceHolder="Name"
          iconType="edit"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          PlaceHolder="Email"
          iconType="mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(pass) => setPassword(pass)}
          PlaceHolder="Password"
          iconType="lock"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={ConfirmPassword}
          onChangeText={(CPass) => {
            setConfirmPassword(CPass);
            if (password === CPass) {
              setEnable(false);
              console.log(password + "  " + CPass + "   " + ConfirmPassword);
            }
          }}
          PlaceHolder="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <SelectPhoto
          iconType="camera"
          onPress={() => {
            SelectImage()
          }}
          textValue="Select Profile Photo"
        />
        <FormButton
          buttonTitle="Sign Up"
          disabled={enable}
          onPress={() => register(email, password,image,name,IsUpload)}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{" "}
          </Text>
          <TouchableOpacity onPress={() => alert("Terms Clicked!")}>
            <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
            Privacy Policy
          </Text>
        </View>

        {Platform.OS === "android" ? (
          <View>
            <SocialButton
              btnType="facebook"
              ButtonTitle="Sign up with Facebook "
              Color="#4867aa"
              bgColor="#e6eaf4"
            />
            <SocialButton
              btnType="google"
              ButtonTitle="Sign up with Google "
              Color="#de4d41"
              bgColor="#f5e7ea"
            />
          </View>
        ) : null}
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.navButtonText}>
            I have already an acount? SignIn
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 5,
    justifyContent: "center",
  },
  forgotButton: {
    marginVertical: 35,
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: "400",

    color: "grey",
  },
  ImgStyle: {
    height: 60,
    width: 60,
    position: "absolute",
    borderRadius: 50,
    right: 10,
    top: 0,
  },
});
