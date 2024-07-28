// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "newzy-53d08.firebaseapp.com",
  projectId: "newzy-53d08",
  storageBucket: "newzy-53d08.appspot.com",
  messagingSenderId: "1064121671047",
  appId: "1:1064121671047:web:6a04ae8fe444afaef58722",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
