import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNjpebLDfoHPL4dQ5FeQLhvn_9xkPHvlI",
    authDomain: "my-things-438be.firebaseapp.com",
    projectId: "my-things-438be",
    storageBucket: "my-things-438be.appspot.com",
    messagingSenderId: "469864603114",
    appId: "1:469864603114:web:861607d8d4516d0c8a6693",
    measurementId: "G-GV0D1EB3MZ"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
