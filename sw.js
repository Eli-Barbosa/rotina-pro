const CACHE_NAME = 'rotina-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Adicione aqui o nome da sua imagem de ícone se tiver
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});