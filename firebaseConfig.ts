import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTzOXDHhpRdTGnHfPjHqkCK2P3EuhxcVg",
    authDomain: "pilvi-valokuvaus.firebaseapp.com",
    projectId: "pilvi-valokuvaus",
    storageBucket: "pilvi-valokuvaus.firebasestorage.app",
    messagingSenderId: "637070805840",
    appId: "1:637070805840:web:bebc00bcd4a4fbed00ba55",
    measurementId: "G-CF9VRJPCTC"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

 