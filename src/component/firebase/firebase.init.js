// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq89xHuoP5iHut99s7VrUbxckNTJSYQtA",
  authDomain: "auth-router-app.firebaseapp.com",
  projectId: "auth-router-app",
  storageBucket: "auth-router-app.appspot.com",
  messagingSenderId: "1001699669014",
  appId: "1:1001699669014:web:3e65d38a63e2982c007137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;