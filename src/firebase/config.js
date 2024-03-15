
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBR4AtnxtllAAR4Z8jsagjv8seNOcvKPWc",
    authDomain: "masteritsystem-309ef.firebaseapp.com",
    projectId: "masteritsystem-309ef",
    storageBucket: "masteritsystem-309ef.appspot.com",
    messagingSenderId: "213678743291",
    appId: "1:213678743291:web:23601e1927835936ee9a5e"
};

const firebaseApp = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(firebaseApp);
const projectAuth = getAuth(firebaseApp);
const projectStorage = getStorage(firebaseApp);
const timestamp = serverTimestamp;
export { projectAuth, projectFirestore, projectStorage, timestamp };