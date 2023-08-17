import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCo7uWqDhKdbN4BYW3UKvzcSk0jrg4CFhE",
  authDomain: "coderhouse-ecommerce-45740.firebaseapp.com",
  projectId: "coderhouse-ecommerce-45740",
  storageBucket: "coderhouse-ecommerce-45740.appspot.com",
  messagingSenderId: "1029074635080",
  appId: "1:1029074635080:web:838d4a89abe03176468b7d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);