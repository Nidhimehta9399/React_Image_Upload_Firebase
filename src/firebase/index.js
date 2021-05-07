import firebase from "firebase";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZtNRHlpYRqlpYgOEYS6GYA3_MRDC5EBw",
    authDomain: "fir-react-upload-ee5ac.firebaseapp.com",
    projectId: "fir-react-upload-ee5ac",
    storageBucket: "fir-react-upload-ee5ac.appspot.com",
    messagingSenderId: "845763181340",
    appId: "1:845763181340:web:2caf4614cae182e3b018d9",
    measurementId: "G-7S0Q5TYG98"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  
  export {storage,firebase as default};