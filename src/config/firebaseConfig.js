// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
//import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBahcXHd9cpbRogP2ibmlWJIkMhC7ieLCc",
  authDomain: "pisebo-7440a.firebaseapp.com",
  projectId: "pisebo-7440a",
  storageBucket: "pisebo-7440a.appspot.com",
  messagingSenderId: "251211790932",
  appId: "1:251211790932:web:0a7a065bbc81b9a1e4cbc1",
  measurementId: "G-P8NDQPGLRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };