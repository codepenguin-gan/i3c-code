// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsYCO45KWp8hRiCFMprZCc2BesbkEbNFg",
    authDomain: "soulsupport-16f17.firebaseapp.com",
    projectId: "soulsupport-16f17",
    storageBucket: "soulsupport-16f17.firebasestorage.app",
    messagingSenderId: "904921192993",
    appId: "1:904921192993:web:f7d2d38bcad69d54362160",
    measurementId: "G-F6N2JK709X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);