import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBK9tJ5Y9ZOTKg3eTVXocpbPZ489lgAJl4",
    authDomain: "meal-planner-ebf98.firebaseapp.com",
    databaseURL: "https://meal-planner-ebf98.firebaseio.com",
    projectId: "meal-planner-ebf98",
    storageBucket: "meal-planner-ebf98.appspot.com",
    messagingSenderId: "808196001262",
    appId: "1:808196001262:web:6ad22aace5ce09505dd2ff",
    measurementId: "G-BY50X57ETX"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

  export const auth = firebase.auth();
  export const f = firebase;
  // Get a reference to the storage service, which is used to create references in your storage bucket
  export const storage = firebase.storage();
  // Create a storage reference from our storage service
  export const storageRef = storage.ref();
  export const database = firebase.firestore();