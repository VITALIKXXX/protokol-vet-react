import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebaseApp.js";

const breedersCollection = collection(db, "breeders");

const mapDocToBreeder = (docSnap) => {
    const data = docSnap.data();

    return {
        id: docSnap.id,
        name: data?.name || "",
        farmNumber: data?.farmNumber || "",
        contactName: data?.contactName || "",
        phone: data?.phone || "",
        mapUrl: data?.mapUrl || "",
        note: data?.note || "",
        createdAtMs:
            data?.createdAt?.toMillis?.() ?? data?.createdAtMs ?? 0,
    };
};


export const subscribeBreeders = (onChange) => {
    const q = query(breedersCollection, orderBy("createdAt", "desc"));

    return onSnapshot(q, (snapshot) => {
        const items = snapshot.docs.map(mapDocToBreeder);
        onChange(items);
    });
};


export const createBreeder = async (data) => {
    const payload = {
        name: data.name || "",
        farmNumber: data.farmNumber || "",
        contactName: data.contactName || "",
        phone: data.phone || "",
        mapUrl: data.mapUrl || "",
        note: data.note || "",
        createdAt: serverTimestamp(),
        createdAtMs: Date.now(),
    };

    await addDoc(breedersCollection, payload);
};