// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2dbf5.firebaseapp.com",
  projectId: "mern-blog-2dbf5",
  storageBucket: "mern-blog-2dbf5.firebasestorage.app",
  messagingSenderId: "21762023675",
  appId: "1:21762023675:web:21d6804cc950fcde88905e",
};

export const app = initializeApp(firebaseConfig);
