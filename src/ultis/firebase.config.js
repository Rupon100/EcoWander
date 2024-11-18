 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtLyYWOZoCHN-xe79D7bYT0O__dnjSQ2U",
  authDomain: "ecowander-5244c.firebaseapp.com",
  projectId: "ecowander-5244c",
  storageBucket: "ecowander-5244c.firebasestorage.app",
  messagingSenderId: "119480369442",
  appId: "1:119480369442:web:64bc608224f03f0623e57b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;