// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4kPl_AxXnld0SalMt0XzBCMyCEVijKTQ",
  authDomain: "bistro-boss-6cb6b.firebaseapp.com",
  projectId: "bistro-boss-6cb6b",
  storageBucket: "bistro-boss-6cb6b.appspot.com",
  messagingSenderId: "368981660041",
  appId: "1:368981660041:web:ad87c5451a7ebf499f5158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;