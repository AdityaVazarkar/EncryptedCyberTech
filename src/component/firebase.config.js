// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS-GznhYWyppNO1G2YX4-9OjOyWt51B2c",
  authDomain: "cybersecurity-68f78.firebaseapp.com",
  projectId: "cybersecurity-68f78",
  storageBucket: "cybersecurity-68f78.appspot.com",
  messagingSenderId: "732873454868",
  appId: "1:732873454868:web:1454b16c7be3f32a92be01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
