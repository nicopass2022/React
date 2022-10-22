// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6oIUkVMMz3SU6JLYfkC_ksEkkCTttndI",
  authDomain: "carritoejemplo-c450b.firebaseapp.com",
  projectId: "carritoejemplo-c450b",
  storageBucket: "carritoejemplo-c450b.appspot.com",
  messagingSenderId: "481473185954",
  appId: "1:481473185954:web:440ce6aafae77124c52ffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firestoreInit=()=> app
