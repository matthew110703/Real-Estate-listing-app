import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shared-b02c0.firebaseapp.com",
  projectId: "shared-b02c0",
  storageBucket: "shared-b02c0.firebasestorage.app",
  messagingSenderId: "154557315438",
  appId: "1:154557315438:web:382ea4ada7cf4af565e97f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
