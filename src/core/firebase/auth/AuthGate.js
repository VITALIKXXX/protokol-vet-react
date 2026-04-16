import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseApp.js";
import { ensureUserDoc, getMyRole } from "../usersApi.js";
import { LoginPage } from "./LoginPage.js";

export const AuthGate = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (u) => {
            setUser(u);

            if (!u) {
                setRole(null);
                setLoading(false);
                return;
            }

            await ensureUserDoc({ uid: u.uid, email: u.email });

            const r = await getMyRole(u.uid);
            setRole(r);

            setLoading(false);
        });

        return () => unsub();
    }, []);

    if (loading) return <div style={{ padding: 16 }}>Ładowanie...</div>;
    if (!user) return <LoginPage />;

    return (
        <div>
            <div style={{ padding: 10, color: "black", fontSize: 16, opacity: 0.8 }}>
                Zalogowany: <b>{user.email}</b> | rola: <b>{role || "brak"}</b>{" "}
                <button onClick={() => signOut(auth)} style={{ marginLeft: 10 }}>
                    Wyloguj
                </button>
            </div>

            {children({ role })}
        </div>
    );
};