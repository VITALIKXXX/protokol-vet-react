import { doc, getDoc, } from "firebase/firestore";
import { db } from "./firebaseApp.js";

export const ensureUserDoc = async ({ uid }) => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
        throw new Error(
            "Brak profilu użytkownika. Skontaktuj się z administratorem."
        );
    }
};

export const getMyUserData = async (uid) => {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) return null;

    return snap.data();
};