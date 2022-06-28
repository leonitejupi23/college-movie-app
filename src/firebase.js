// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBac8fBYShggEciHQtpHowpwidCI9lzql8",
  authDomain: "movie-college.firebaseapp.com",
  projectId: "movie-college",
  storageBucket: "movie-college.appspot.com",
  messagingSenderId: "56677995196",
  appId: "1:56677995196:web:8a1e20250dc01ad34276b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
