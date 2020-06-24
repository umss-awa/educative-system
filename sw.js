self.addEventListener('install', e => {
    const cacheProms = caches.open('cache-sw').then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/styles/bootstrap.css',
            '/styles/styles.css',
            '/scripts/bootstrap.js',
            '/scripts/jquery-3.5.1.slim.min.js',
            '/scripts/scripts.js',
            '/images/burger.png',
        ]);
    });

    e.waitUntil(cacheProms);
});

self.addEventListener('fetch', e => {

    // 1 - Cache Only
    e.respondWith(caches.match(e.request));

});