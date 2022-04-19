// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcyS5nTl424gzKFhKa2yWaNxSMepHXh0c",
  authDomain: "onlineshop-zaki.firebaseapp.com",
  projectId: "onlineshop-zaki",
  storageBucket: "onlineshop-zaki.appspot.com",
  messagingSenderId: "659940025590",
  appId: "1:659940025590:web:1c870bf66aaf9f53e838d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

