// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxcefw2-x9DUiiV6pydbEzkwN7My2gwU8",
  authDomain: "roomify-3fb25.firebaseapp.com",
  projectId: "roomify-3fb25",
  storageBucket: "roomify-3fb25.appspot.com",
  messagingSenderId: "890901035941",
  appId: "1:890901035941:web:890fd862fe0a1d7644864c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}