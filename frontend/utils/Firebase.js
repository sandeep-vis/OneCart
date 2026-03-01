import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-ad108.firebaseapp.com",
  projectId: "loginonecart-ad108",
  storageBucket: "loginonecart-ad108.firebasestorage.app",
  messagingSenderId: "1053291452648",
  appId: "1:1053291452648:web:933890f74b50daaaf5515d"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }