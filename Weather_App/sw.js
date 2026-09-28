self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker Activated');
});

self.addEventListener('fetch', (e) => {
  // Network request ko handle karta hai
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
