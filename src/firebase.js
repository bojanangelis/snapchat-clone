import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIQXfAoJ6L5jABj9WQLQi-i_ad2dQY-eg",
  authDomain: "snapchat-clone-ae086.firebaseapp.com",
  projectId: "snapchat-clone-ae086",
  storageBucket: "snapchat-clone-ae086.appspot.com",
  messagingSenderId: "505820957607",
  appId: "1:505820957607:web:a7df5c7b66313253864482",
  measurementId: "G-77QXYXP77Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
