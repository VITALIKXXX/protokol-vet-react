import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseApp.js";

export const ensureUserDoc = async ({ uid, email }) => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (snap.exists()) return;

    await setDoc(ref, {
        email: email || "",
        displayName: email?.split("@")[0] || "Pracownik",
        role: "worker",
        createdAt: serverTimestamp(),
    });
};

export const getMyUserData = async (uid) => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) return null;

    return snap.data();
};