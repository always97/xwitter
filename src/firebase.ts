import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBp6awYepI8gwF4Z2TwWOsbBuZnM89L-oE",
  authDomain: "xwitter-2ce81.firebaseapp.com",
  projectId: "xwitter-2ce81",
  storageBucket: "xwitter-2ce81.appspot.com",
  messagingSenderId: "1090334523742",
  appId: "1:1090334523742:web:dc504169e5430ad4dd4fcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
