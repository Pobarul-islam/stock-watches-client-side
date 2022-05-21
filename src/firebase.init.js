// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwozfzEq7obuSi5iSTZDug1bx3ZAtenFw",
    authDomain: "stock-watches.firebaseapp.com",
    projectId: "stock-watches",
    storageBucket: "stock-watches.appspot.com",
    messagingSenderId: "826633786578",
    appId: "1:826633786578:web:ae97680520b608a7f2090b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;