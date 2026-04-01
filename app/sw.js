// Service Worker - Pass-through only, no caching
// This ensures users always get fresh content

const CACHE_NAME = "facet-pwa-v8";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  
  // No caching - always fetch from network
  // This ensures updates are always seen
  event.respondWith(fetch(event.request));
});