import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import FormButton from "../../Component/FormComponent/FormButton";
import FormInput from "../../Component/FormComponent/FormInput";
import SocialButton from "../../Component/FormComponent/SocialButton";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../Navigationf/Stack/AuthStack/AuthProvider";

import * as firebase from "firebase";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [waiting, setWaiting] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [error, setError] = useState("");

  const { login, signInWithGoogleAsync } = useContext(AuthContext);
  const onAuthStateChanged = (user) => {
    if (waiting) {
      setWaiting(false);
    }
  };

  React.useEffect(() => {
    if (signIn) {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      console.log(subscriber);
      return subscriber; // unsubscribe on unmount
    }
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image
          source={require("./../../assets/Group110.png")}
          style={styles.logo}
        />
      </View>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        PlaceHolder="Email"
        iconType="user"
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

      <FormButton
        buttonTitle="Sign In"
        onPress={() => {
          setWaiting(true);
          setSignIn(true);
          setError(login(email, password));
        }}
        user={waiting}
      ></FormButton>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navButtonText}>Forget Password?</Text>
      </TouchableOpacity>
      {Platform.OS === "android" ? (
        <View>
          <SocialButton
            btnType="facebook"
            ButtonTitle="Sign in with Facebook "
            Color="#4867aa"
            bgColor="#e6eaf4"
          />
          <SocialButton
            btnType="google"
            ButtonTitle="Sign in with Google "
            Color="#de4d41"
            onPress={() => {
              // signInWithGoogleAsync()
            }}
            bgColor="#f5e7ea"
          />
        </View>
      ) : null}
      <TouchableOpacity style={styles.forgotButton}>
        <Text
          style={styles.navButtonText}
          onPress={() => navigation.navigate("SignUp")}
        >
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
  },
});
