import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "testproject-5d879.firebaseapp.com",
  projectId: "testproject-5d879",
  storageBucket: "testproject-5d879.appspot.com",
  messagingSenderId: "515497113880",
  appId: "1:515497113880:web:2685d56fc5d0c5449c866d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()