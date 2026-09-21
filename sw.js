// Service worker: guarda la app completa para que funcione sin conexión.
// Cambia VERSION en cada publicación para que los teléfonos descarguen la nueva.
const VERSION = 'calcu-v0.2.1';
const ASSETS = [
  './', 'index.html', 'manifest.webmanifest',
  'lib/math.js', 'lib/nerdamer.all.min.js', 'lib/algebrite.bundle-for-browser.js',
  'lib/mathlive/mathlive.min.js', 'lib/mathlive/mathlive-fonts.css', 'lib/mathlive/mathlive-static.css',
  'lib/mathlive/fonts/KaTeX_AMS-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Caligraphic-Bold.woff2',
  'lib/mathlive/fonts/KaTeX_Caligraphic-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Fraktur-Bold.woff2',
  'lib/mathlive/fonts/KaTeX_Fraktur-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Main-Bold.woff2',
  'lib/mathlive/fonts/KaTeX_Main-BoldItalic.woff2',
  'lib/mathlive/fonts/KaTeX_Main-Italic.woff2',
  'lib/mathlive/fonts/KaTeX_Main-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Math-BoldItalic.woff2',
  'lib/mathlive/fonts/KaTeX_Math-Italic.woff2',
  'lib/mathlive/fonts/KaTeX_SansSerif-Bold.woff2',
  'lib/mathlive/fonts/KaTeX_SansSerif-Italic.woff2',
  'lib/mathlive/fonts/KaTeX_SansSerif-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Script-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Size1-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Size2-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Size3-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Size4-Regular.woff2',
  'lib/mathlive/fonts/KaTeX_Typewriter-Regular.woff2',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(e.request).then((res) => {
        if (res.ok || res.type === 'opaque') {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match('index.html'));
    })
  );
});
