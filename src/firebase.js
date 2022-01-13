import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8X435YNVlHvHhyi-gLj5u93oqIIMhM1U",
  authDomain: "etfe-62c4e.firebaseapp.com",
  projectId: "etfe-62c4e",
  storageBucket: "etfe-62c4e.appspot.com",
  messagingSenderId: "182681986198",
  appId: "1:182681986198:web:cab7783f5d6a10ecec4eb7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;


