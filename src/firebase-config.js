// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuEvw-eAgbcz-PLrRdM8YvGGIKNG4eS0k",
    authDomain: "email-client-ahindra.firebaseapp.com",
    projectId: "email-client-ahindra",
    storageBucket: "email-client-ahindra.appspot.com",
    messagingSenderId: "978162897383",
    appId: "1:978162897383:web:3a21956b61cf10277cad42",
    measurementId: "G-4KC9V1LMX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };