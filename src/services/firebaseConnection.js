import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBqRKTr5hVagRpzBJmLQ0af0Spnm9wCTS4",
    authDomain: "sistema-9cae5.firebaseapp.com",
    projectId: "sistema-9cae5",
    storageBucket: "sistema-9cae5.appspot.com",
    messagingSenderId: "1005533552573",
    appId: "1:1005533552573:web:7f55bdddd56136c7b5bcd4",
    measurementId: "G-E63FC9DSM1"
  };

  if(!firebase.getApps.length){
    const app = initializeApp(firebaseConfig);
  }

  export default firebase;