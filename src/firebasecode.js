// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_6WpdthXE7abLAPpAsSUVilwbaCsvVe4",
    authDomain: "retournappform.firebaseapp.com",
    projectId: "retournappform",
    storageBucket: "retournappform.appspot.com",
    messagingSenderId: "473302972205",
    appId: "1:473302972205:web:3dfde62887ca12064d85a4",
    measurementId: "G-TCLBPVJNMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
