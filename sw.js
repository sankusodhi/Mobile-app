const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/manifest.json",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

// Install Service Worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch Data from Cache or Network
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
