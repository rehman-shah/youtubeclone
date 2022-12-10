// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4nQRALjeXIBCj3yvSQ-gkSLciv-kZbJk",
  authDomain: "artube-cdf8d.firebaseapp.com",
  projectId: "artube-cdf8d",
  storageBucket: "artube-cdf8d.appspot.com",
  messagingSenderId: "1078197029222",
  appId: "1:1078197029222:web:b1b803a84d42ffafcce0a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;