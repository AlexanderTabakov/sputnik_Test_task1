// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArXLMTpo_8ebBOzgfdEcphN0x5EZ6yMxk",
    authDomain: "auth-sputnik.firebaseapp.com",
    projectId: "auth-sputnik",
    storageBucket: "auth-sputnik.appspot.com",
    messagingSenderId: "832685000119",
    appId: "1:832685000119:web:d216bb83c9a2c42c029432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUser = async (email:string, password:any) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email:string, password:any) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}
