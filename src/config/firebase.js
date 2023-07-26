import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDprOtcFVKA7X1Brk_2WlEyU3XKJdpjAVM",
  authDomain: "university-group-project-69c19.firebaseapp.com",
  projectId: "university-group-project-69c19",
  storageBucket: "university-group-project-69c19.appspot.com",
  messagingSenderId: "867469322586",
  appId: "1:867469322586:web:ad7bf8d0de554a34212b63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
