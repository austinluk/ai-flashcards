// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAelkBlsWiogh2MZZDRrT_WckI0RanYtp4",
  authDomain: "flashac-63609.firebaseapp.com",
  projectId: "flashac-63609",
  storageBucket: "flashac-63609.appspot.com",
  messagingSenderId: "750046315228",
  appId: "1:750046315228:web:011b91b7d412becfa8aa19",
  measurementId: "G-91YF8T8VZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}