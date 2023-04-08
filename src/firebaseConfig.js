import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwZQb9894QgX-Yo5lz42i7cQmnYJ_IQkc",
  authDomain: "react-doctor-booking.firebaseapp.com",
  projectId: "react-doctor-booking",
  storageBucket: "react-doctor-booking.appspot.com",
  messagingSenderId: "494902063861",
  appId: "1:494902063861:web:f1ec48b95f51d039648bbc"
};

const app = initializeApp(firebaseConfig);
 const firestoreDatabase = getFirestore(app);
 export default firestoreDatabase

