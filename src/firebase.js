import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQnD64FDngxriqTywDFcdqehNrasx4ucI",
  authDomain: "landing-d0f18.firebaseapp.com",
  projectId: "landing-d0f18",
  storageBucket: "landing-d0f18.appspot.com",
  messagingSenderId: "1058337250887",
  appId: "1:1058337250887:web:04e0d2ec4ab29d4baf1b62"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);