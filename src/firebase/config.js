
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {

    apiKey: "AIzaSyA0KZ4vXSImcJkKud_pq1YsOaNMQ0TwN5I",

    authDomain: "masteritsystem-fca6d.firebaseapp.com",

    projectId: "masteritsystem-fca6d",

    storageBucket: "masteritsystem-fca6d.appspot.com",

    messagingSenderId: "757847229299",

    appId: "1:757847229299:web:4429935dcbfef0d904bb06"

};
const firebaseApp = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(firebaseApp);
const projectAuth = getAuth(firebaseApp);
const projectStorage = getStorage(firebaseApp);
const timestamp = serverTimestamp;
export { projectAuth, projectFirestore, projectStorage, timestamp };