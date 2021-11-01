// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwD9VyE6kfEZpLSX0TA0FlmYaoBdy4wgw",
  authDomain: "clon-895ef.firebaseapp.com",
  projectId: "clon-895ef",
  storageBucket: "clon-895ef.appspot.com",
  messagingSenderId: "714477738777",
  appId: "1:714477738777:web:968eaa76a3dc3e6f7a8388",
  measurementId: "G-TXBTD1GQHB",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = firebase.auth();
export { db, auth };
