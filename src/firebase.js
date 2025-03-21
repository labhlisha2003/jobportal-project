// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGJYPg9rzCo3q6NiU639pTqQ8lSO3qQrc",
  authDomain: "onlinejobportal-c85d0.firebaseapp.com",
  projectId: "onlinejobportal-c85d0",
  storageBucket: "onlinejobportal-c85d0.firebasestorage.app",
  messagingSenderId: "218629868802",
  appId: "1:218629868802:web:ba47cc4adbfe4a9c72061b",
  measurementId: "G-PTNKLXVKR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const database = getDatabase(app);


export { auth,  database};