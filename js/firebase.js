// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRKzr1rUZI-xuUATDFc1bcVIglaYiZ1t4",
  authDomain: "kalya-travel.firebaseapp.com",
  projectId: "kalya-travel",
  storageBucket: "kalya-travel.appspot.com",
  messagingSenderId: "1051544410206",
  appId: "1:1051544410206:web:d8d9c318d9aa526cb3fccf",
  measurementId: "G-XW1G5YZN3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);