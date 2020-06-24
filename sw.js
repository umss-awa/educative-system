const CACHE_STATIC = 'static-v2';
const CACHE_DYNAMIC = 'dynamic-v1';
const CACHE_INMUTABLE = 'inmutable-v1';

function clearCache(cacheName, numberItems) {

    caches.open(cacheName).then(cache => {

        return cache.keys().then(keys => {

            if (keys.length > numberItems) {
                cache.delete(keys[0]).then(
                    clearCache(cacheName, numberItems)
                );
            }

        })

    });

}

self.addEventListener('install', e => {

    const cacheStatic = caches.open(CACHE_STATIC).then(cache => {

        return cache.addAll([
            '/',
            '/index.html',
            '/images/wallpaper.jpg',
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

    // 3 - Network with cache fallback

    const respNet = fetch(e.request).then(resp => {

        if (!resp) return caches.match(e.request);

        caches.open(CACHE_DYNAMIC).then(cache => {

            cache.put(e.request, resp);
            clearCache(CACHE_DYNAMIC, 1);

        });

        return resp.clone();

    }).catch(error => {
        return caches.match(e.request);
    });

    e.respondWith(respNet);

});