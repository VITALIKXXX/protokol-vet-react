import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseApp.js";
import {
    ensureUserDoc,
    getMyUserData,
} from "../usersApi.js";
import { LoginPage } from "./LoginPage.js";
import { WelcomeScreen } from "../../../features/welcome/WelcomeScreen.js";
import {
    AuthWrapper,
    Loading,
    UserBar,
    UserInfo,
    UserBadge,
    RoleBadge,
    LogoutButton,
} from "./AuthGate.styles.js";

export const AuthGate = ({ children }) => {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showWelcome, setShowWelcome] = useState(false);
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        let welcomeTimeout;

        const unsubscribe = onAuthStateChanged(
            auth,
            async (firebaseUser) => {
                setUser(firebaseUser);

                if (!firebaseUser) {
                    setRole(null);
                    setDisplayName("");
                    setShowWelcome(false);
                    setLoading(false);
                    return;
                }

                try {
                    setLoading(true);

                    await ensureUserDoc({
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                    });

                    const userData = await getMyUserData(
                        firebaseUser.uid
                    );

                    setRole(userData?.role || "worker");

                    setDisplayName(
                        userData?.displayName ||
                        firebaseUser.email?.split("@")[0] ||
                        "Pracownik"
                    );

                    setShowWelcome(true);

                    welcomeTimeout = setTimeout(() => {
                        setShowWelcome(false);
                    }, 3000);
                } catch (error) {
                    console.error(
                        "Błąd pobierania użytkownika:",
                        error
                    );

                    setRole("worker");

                    setDisplayName(
                        firebaseUser.email?.split("@")[0] ||
                        "Pracownik"
                    );

                    setShowWelcome(false);
                } finally {
                    setLoading(false);
                }
            }
        );

        return () => {
            unsubscribe();
            clearTimeout(welcomeTimeout);
        };
    }, []);

    if (loading) {
        return <Loading>Ładowanie aplikacji...</Loading>;
    }

    if (!user) {
        return <LoginPage />;
    }

    if (showWelcome) {
        return <WelcomeScreen name={displayName} />;
    }

    return (
        <AuthWrapper>
            <UserBar>
                <UserInfo>
                    <UserBadge>
                        👤 Zalogowany:
                        <strong>
                            {displayName || user.email}
                        </strong>
                    </UserBadge>

                    <RoleBadge>
                        🛡️ Rola:
                        <strong>
                            {role === "admin"
                                ? "ADMIN"
                                : "WORKER"}
                        </strong>
                    </RoleBadge>
                </UserInfo>

                <LogoutButton
                    type="button"
                    onClick={() => signOut(auth)}
                >
                    🚪 Wyloguj
                </LogoutButton>
            </UserBar>

            {children({ role })}
        </AuthWrapper>
    );
};