import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjyTNyuy7aoHKw6fUkgUojRQ4nfb7POEw",
    authDomain: "delivery-app-d235d.firebaseapp.com",
    projectId: "delivery-app-d235d",
    storageBucket: "delivery-app-d235d.appspot.com",
    messagingSenderId: "545492387878",
    appId: "1:545492387878:web:8ce5ca82353264e19ebee7",
    measurementId: "G-H4V3HYWCV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);