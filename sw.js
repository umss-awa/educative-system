const CACHE_SW = 'cache-sw';

self.addEventListener('install', e => {
    const cacheProms = caches.open(CACHE_SW).then(cache => {
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
    // 2 - Cache with Network Fallback
    const respuesta = caches.match(e.request).then(resp => {
        
        if (resp) return resp;
        console.log('No existe', e.request.url);

        return fetch(e.request).then(otherResp => {

            caches.open(CACHE_SW).then(cache => {

                cache.put(e.request, otherResp);

            });

            return otherResp.clone();

        });

    });

    e.respondWith(respuesta);

});