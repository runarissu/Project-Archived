// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD3RTRaHArc_KvKLB3HHhEFmj6aoxWIxmc",
    authDomain: "project-archived.firebaseapp.com",
    projectId: "project-archived",
    storageBucket: "project-archived.appspot.com",
    messagingSenderId: "255496022855",
    appId: "1:255496022855:web:f8ac6b8075f1ae9e607a62",
    measurementId: "G-1YSB7L1PBC",
};

// Initialize Firebase
let firebase_app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
