// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDicXmf1fBKzl192P5xV7jlIy56nTB00YU",
  authDomain: "instagram-clone-3443a.firebaseapp.com",
  projectId: "instagram-clone-3443a",
  storageBucket: "instagram-clone-3443a.appspot.com",
  messagingSenderId: "394899094270",
  appId: "1:394899094270:web:b52dee5f77b2a1d24c83af"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}