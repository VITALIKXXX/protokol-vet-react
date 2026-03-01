import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseApp.js";

const breedersCollection = collection(db, "breeders");

export const createBreeder = async (data) => {
    const payload = {
        name: data.name || "",
        farmNumber: data.farmNumber || "",
        contactName: data.contactName || "",
        phone: data.phone || "",
        mapUrl: data.mapUrl || "",
        note: data.note || "",
        createdAt: serverTimestamp(),
    };

    await addDoc(breedersCollection, payload);
};