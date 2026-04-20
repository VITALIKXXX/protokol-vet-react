import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { db } from "./firebaseApp.js";

const breedersCollection = collection(db, "breeders");

const normalizeContacts = (contacts) => {
    if (!Array.isArray(contacts)) return [];

    return contacts
        .map((contact) => ({
            person: String(contact?.person || "").trim(),
            phone: String(contact?.phone || "").trim(),
        }))
        .filter((contact) => contact.person || contact.phone);
};

const mapDocToBreeder = (docSnap) => {
    const data = docSnap.data();

    const contactsFromArray = normalizeContacts(data?.contacts);

    const legacyContact =
        data?.contactName || data?.phone
            ? [
                {
                    person: String(data?.contactName || "").trim(),
                    phone: String(data?.phone || "").trim(),
                },
            ]
            : [];

    const contacts =
        contactsFromArray.length > 0 ? contactsFromArray : legacyContact;

    return {
        id: docSnap.id,
        name: data?.name || "",
        farmNumber: data?.farmNumber || "",
        contacts,
        contactName: contacts[0]?.person || "",
        phone: contacts[0]?.phone || "",
        mapUrl: data?.mapUrl || "",
        note: data?.note || "",
        createdAtMs: data?.createdAt?.toMillis?.() ?? data?.createdAtMs ?? 0,
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
    const contacts = normalizeContacts(data.contacts);
    const generatedFarmNumber = Date.now().toString();

    const payload = {
        name: data.name || "",
        farmNumber: generatedFarmNumber,
        contacts,
        contactName: contacts[0]?.person || "",
        phone: contacts[0]?.phone || "",
        mapUrl: data.mapUrl || "",
        note: data.note || "",
        createdAt: serverTimestamp(),
        createdAtMs: Date.now(),
    };

    await addDoc(breedersCollection, payload);
};

export const updateBreeder = async (id, data) => {
    const breederRef = doc(db, "breeders", id);
    const contacts = normalizeContacts(data.contacts);

    await updateDoc(breederRef, {
        name: data.name || "",
        contacts,
        contactName: contacts[0]?.person || "",
        phone: contacts[0]?.phone || "",
        mapUrl: data.mapUrl || "",
        note: data.note || "",
    });
};

export const removeBreeder = async (id) => {
    const breederRef = doc(db, "breeders", id);
    await deleteDoc(breederRef);
};