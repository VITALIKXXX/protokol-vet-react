import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUOKg6wexCpYqCQuJFIj3pVzrpi_2QHOE",
    authDomain: "vet-breeders.firebaseapp.com",
    projectId: "vet-breeders",
    storageBucket: "vet-breeders.firebasestorage.app",
    messagingSenderId: "73597052534",
    appId: "1:73597052534:web:7acb0e0ea9de5a057da157",
    measurementId: "G-VFSC7DVR77"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);