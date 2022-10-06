import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  '.images/logo/logo.png',
  '.images/logo/logo-kotak-makan-72x72.png',
  '.images/logo/logo-kotak-makan-96x96.png',
  '.images/logo/logo-kotak-makan-128x128.png',
  '.images/logo/logo-kotak-makan-144x144.png',
  '.images/logo/logo-kotak-makan-152x152.png',
  '.images/logo/logo-kotak-makan-192x192.png',
  '.images/logo/logo-kotak-makan-512x512.png',
  '.images/heros/hero-image_2.jpg',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
