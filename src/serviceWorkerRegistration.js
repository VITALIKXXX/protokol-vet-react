const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export const register = (config) => {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    window.addEventListener("load", () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        if (isLocalhost) {
            return;
        }

        navigator.serviceWorker
            .register(swUrl)
            .then((registration) => {
                registration.onupdatefound = () => {
                    const installingWorker = registration.installing;

                    if (!installingWorker) {
                        return;
                    }

                    installingWorker.onstatechange = () => {
                        if (installingWorker.state !== "installed") {
                            return;
                        }

                        if (navigator.serviceWorker.controller) {
                            config?.onUpdate?.(registration);
                        } else {
                            config?.onSuccess?.(registration);
                        }
                    };
                };
            })
            .catch((error) => {
                console.error(
                    "Service worker registration failed:",
                    error
                );
            });
    });
};

export const unregister = () => {
    if (!("serviceWorker" in navigator)) {
        return;
    }

    navigator.serviceWorker.ready
        .then((registration) => registration.unregister())
        .catch((error) => {
            console.error(error.message);
        });
};