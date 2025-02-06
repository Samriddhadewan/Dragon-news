// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDog3WaPxITMGOX1x8baTMqHnGOiB87ewc",
  authDomain: "dragon-news-4eaf2.firebaseapp.com",
  projectId: "dragon-news-4eaf2",
  storageBucket: "dragon-news-4eaf2.firebasestorage.app",
  messagingSenderId: "805033126810",
  appId: "1:805033126810:web:aa6dd286987eacbdb0e823"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;