// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqBDgwaQuNfdHBH74ZYX91hbeTu2sD4jU",
    authDomain: "fir-5d82f.firebaseapp.com",
    projectId: "fir-5d82f",
    storageBucket: "fir-5d82f.appspot.com",
    messagingSenderId: "67927653898",
    appId: "1:67927653898:web:68eeae69b0da935b66e9f3",
    measurementId: "G-1DB1ZX7FDN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const dBase = app.firestore();

export { auth, dBase };
