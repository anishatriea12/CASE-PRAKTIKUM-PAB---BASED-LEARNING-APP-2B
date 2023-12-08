import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyC9VhNgr1gwwNZ14T9uD-P0FIwbr2hHCcc",
  authDomain: "praktikum-12---noteapp-2b.firebaseapp.com",
  projectId: "praktikum-12---noteapp-2b",
  storageBucket: "praktikum-12---noteapp-2b.appspot.com",
  messagingSenderId: "210108627612",
  appId: "1:210108627612:web:710d2115703d39fb164b59",
  measurementId: "G-6L6SQLNK6E"
}); 

const FIREBASE = firebase;

export default FIREBASE;