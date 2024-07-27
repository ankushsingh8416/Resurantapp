import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl0QRwG3nmLd8iXpsrCuNbj1ajx5W8BjQ",
    authDomain: "returantapp-ab0f9.firebaseapp.com",
    databaseURL: "https://returantapp-ab0f9-default-rtdb.firebaseio.com",
    projectId: "returantapp-ab0f9",
    storageBucket: "returantapp-ab0f9.appspot.com",
    messagingSenderId: "1754407875",
    appId: "1:1754407875:web:971f8d00ae7eb3aff55376"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };