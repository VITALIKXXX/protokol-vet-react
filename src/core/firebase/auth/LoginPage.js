import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseApp.js";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr("");
        try {
            await signInWithEmailAndPassword(auth, email.trim(), pass);
        } catch (error) {
            setErr(error?.message || "Błąd logowania");
        }
    };

    return (
        <div
            style={{
                maxWidth: 420,
                margin: "40px auto",
                padding: 20,
                background: "#0f172a",
                borderRadius: 12,
                border: "1px solid #334155",
                color: "#e2e8f0",
            }}
        >
            <h2>Zaloguj się</h2>
            <p style={{ opacity: 0.7, fontSize: 14 }}>
                Tylko dla pracowników firmy.
            </p>

            <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gap: 8 }}>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        autoComplete="email"
                        style={{
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #475569",
                            background: "#020617",
                            color: "#e2e8f0",
                            width: "100%",
                            marginBottom: "10px"
                        }}
                    />
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="hasło"
                        type="password"
                        autoComplete="current-password"
                        style={{
                            padding: "10px",
                            borderRadius: "8px",
                            border: "1px solid #475569",
                            background: "#020617",
                            color: "#e2e8f0",
                            width: "100%",
                            marginBottom: "10px"
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            padding: "10px",
                            borderRadius: "8px",
                            border: "none",
                            background: "#2563eb",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}
                    >
                        Zaloguj
                    </button>
                    {err && <div style={{ color: "crimson", fontSize: 14 }}>{err}</div>}
                </div>
            </form>
        </div>
    );
};