import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAb19ZJlTisuUevf7JbxRurzz422yHypK0",
  authDomain: "cooolteams.firebaseapp.com",
  projectId: "cooolteams",
  storageBucket: "cooolteams.appspot.com",
  messagingSenderId: "485507727826",
  appId: "1:485507727826:web:65bb1e2c427506d7b7880b"
};

// firebase init
firebase.initializeApp(firebaseConfig)

// init service
const firebaseFirestore = firebase.firestore()
const firebaseAuth = firebase.auth()
const firebaseStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { firebaseFirestore, firebaseAuth, timestamp, firebaseStorage }