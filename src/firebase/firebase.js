// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcqv0HLmdVN-Iy01BzNVwttkGK-9cIXlk",
  authDomain: "akbor-shanto.firebaseapp.com",
  projectId: "akbor-shanto",
  storageBucket: "akbor-shanto.appspot.com",
  messagingSenderId: "1026480255606",
  appId: "1:1026480255606:web:1968ce1967f34f81b82557",
  measurementId: "G-S4J4BTQ317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);