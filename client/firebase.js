// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCo3DplsDf2mzxPjDll_h7ypms5-CzShA",
  authDomain: "clarifys.firebaseapp.com",
  projectId: "clarifys",
  storageBucket: "clarifys.appspot.com",
  messagingSenderId: "847978125668",
  appId: "1:847978125668:web:b523bf53c1446f5ba20271",
  measurementId: "G-HXJCYZMVX6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
