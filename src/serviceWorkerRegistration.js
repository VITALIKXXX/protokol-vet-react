export const register = () => {
    if (process.env.NODE_ENV !== "production") return;

    if (!("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        navigator.serviceWorker
            .register(swUrl)
            .then(() => {
                // OK
            })
            .catch(() => {
                // błąd rejestracji – ignorujemy
            });
    });
};

export const unregister = () => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.ready
        .then((registration) => registration.unregister())
        .catch(() => { });
};