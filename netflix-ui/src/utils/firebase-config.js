import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD68V6JujSeStY-KkA0O8dcEVC3W5oqCJ0",
  authDomain: "netflix-clone-9b1cf.firebaseapp.com",
  projectId: "netflix-clone-9b1cf",
  storageBucket: "netflix-clone-9b1cf.appspot.com",
  messagingSenderId: "1052759295600",
  appId: "1:1052759295600:web:19d2c16b331151f15f16b5",
  measurementId: "G-4QRKEPRHHZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);



