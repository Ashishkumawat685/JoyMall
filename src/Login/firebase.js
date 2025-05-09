// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYjFXb49MbRga89DAfdBSU-4UBKlcdDmc",
  authDomain: "loginform-85f5f.firebaseapp.com",
  projectId: "loginform-85f5f",
  storageBucket: "loginform-85f5f.firebasestorage.app",
  messagingSenderId: "1048736363286",
  appId: "1:1048736363286:web:c0f3232e0976ea1fb25637",
  measurementId: "G-YK7F3WXDQQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
