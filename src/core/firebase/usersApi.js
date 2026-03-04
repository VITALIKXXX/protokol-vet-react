import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseApp.js";

export const ensureUserDoc = async ({ uid, email }) => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (snap.exists()) return;

    await setDoc(ref, {
        email: email || "",
        role: "worker",
        createdAt: serverTimestamp(),
    });
};

export const getMyRole = async (uid) => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);
    return snap.exists() ? snap.data().role : null;
};