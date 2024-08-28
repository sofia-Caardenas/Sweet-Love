// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoAp9_DP5Tylx_FW7NzmEzHAhtQqEpaco",
  authDomain: "dulceria-proyecto-indivi-14ed3.firebaseapp.com",
  projectId: "dulceria-proyecto-indivi-14ed3",
  storageBucket: "dulceria-proyecto-indivi-14ed3.appspot.com",
  messagingSenderId: "932137680110",
  appId: "1:932137680110:web:d0ff82a8f46d96704507ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { auth, fireDB }