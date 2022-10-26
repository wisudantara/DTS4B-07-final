// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPhf-fILD6sQenWHKgodkRtBNyZAG8ytM",
  authDomain: "fir-auth-app-fd771.firebaseapp.com",
  projectId: "fir-auth-app-fd771",
  storageBucket: "fir-auth-app-fd771.appspot.com",
  messagingSenderId: "422795941724",
  appId: "1:422795941724:web:2d44ddc1957082adb0d399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;