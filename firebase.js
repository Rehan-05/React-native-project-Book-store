import * as firebase from "firebase";

import 'firebase/firestore'
import 'firebase/storage'

import { LogBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyAEXBXx5OBq3OmZvTJ-RBV4AaSMd_heqxU",
    authDomain: "book-share-d71eb.firebaseapp.com",
    projectId: "book-share-d71eb",
    storageBucket: "book-share-d71eb.appspot.com",
    messagingSenderId: "537953300467",
    appId: "1:537953300467:web:27e6091d6747e7c6e92c86",
    measurementId: "G-BN2MN1F7G8"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  export const db=firebase.firestore();
  export const storage = firebase.storage();
  export default firebase;
 
