const CACHE_STATIC = 'static-v1';
const CACHE_DYNAMIC = 'dynamic-v1';
const CACHE_INMUTABLE = 'inmutable-v1';

self.addEventListener('install', e => {

    const cacheStatic = caches.open(CACHE_STATIC).then(cache => {

        return cache.addAll([
            '/',
            '/index.html',
            '/images/burger.png',
            '/styles/styles.css',
            '/scripts/scripts.js'
        ]);

    });

    const cacheInmutable = caches.open(CACHE_INMUTABLE).then(cache => {

        return cache.addAll([
            '/styles/bootstrap.min.css',
            '/scripts/bootstrap.min.js',
            '/scripts/jquery-3.5.1.slim.min.js'
        ]);

    });

    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));

});

self.addEventListener('fetch', e => {
    // 2 - Cache with Network Fallback
    const respuesta = caches.match(e.request).then(resp => {
        
        if (resp) return resp;
        console.log('No existe', e.request.url);

        return fetch(e.request).then(otherResp => {

            caches.open(CACHE_DYNAMIC).then(cache => {

                cache.put(e.request, otherResp);

            });

            return otherResp.clone();

        });

    });

    e.respondWith(respuesta);

});