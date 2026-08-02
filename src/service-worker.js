/* eslint-disable no-restricted-globals */

import { clientsClaim } from "workbox-core";
import {
    precacheAndRoute,
    createHandlerBoundToURL,
} from "workbox-precaching";
import {
    registerRoute,
    NavigationRoute,
} from "workbox-routing";
import {
    CacheFirst,
    StaleWhileRevalidate,
} from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";

clientsClaim();

// CRA podczas budowania aplikacji wstawi tutaj wszystkie pliki,
// które mają działać również offline.
precacheAndRoute(self.__WB_MANIFEST);

// Przy otwieraniu aplikacji bez internetu użyj zapisanego index.html.
const navigationHandler = createHandlerBoundToURL(
    `${process.env.PUBLIC_URL}/index.html`
);

const navigationRoute = new NavigationRoute(
    navigationHandler,
    {
        denylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
    }
);

registerRoute(navigationRoute);

// Obrazy i ikony.
registerRoute(
    ({ request }) => request.destination === "image",
    new CacheFirst({
        cacheName: "breeders-images",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ],
    })
);

// Pliki JS, CSS i czcionki.
registerRoute(
    ({ request, url }) =>
        request.method === "GET" &&
        url.origin === self.location.origin &&
        ["style", "script", "font"].includes(
            request.destination
        ),
    new StaleWhileRevalidate({
        cacheName: "breeders-static-files",
    })
);

// Po kliknięciu „Aktualizuj” aktywuje nową wersję aplikacji.
self.addEventListener("message", (event) => {
    if (event.data?.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});