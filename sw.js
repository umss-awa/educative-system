importScripts('scripts/sw-utils.js');

const STATIC_CACHE      = 'static-v1';
const DYNAMIC_CACHE     = 'dynamic-v1';
const INMUTABLE_CACHE   = 'inmutable-v1';

const APP_SHELL_STATIC = [
    '/',
    'index.html',
    'pages/tarea.html',
    'styles/style.css',
    'scripts/script.js',
    'pages/materia.html',
    'scripts/sw-utils.js'
];

const APP_SHELL_INMUTABLE = [
    'styles/bootstrap.min.css',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'scripts/jquery-3.5.1.slim.min.js',
    'scripts/bootstrap.min.js'
]

self.addEventListener('install', e => {

    const staticCache = caches.open(STATIC_CACHE).then(cache => cache.addAll(APP_SHELL_STATIC));
    const inmutableCache = caches.open(INMUTABLE_CACHE).then(cache => cache.addAll(APP_SHELL_INMUTABLE));

    e.waitUntil(Promise.all([staticCache, inmutableCache]));

});

self.addEventListener('activate', e => {

    const res = caches.keys().then(keys => {
        keys.forEach(key => {

            if (key !== STATIC_CACHE && key.includes('static')) {
                return caches.delete(key);
            }

        });
    });

    e.waitUntil(res);

});

self.addEventListener('fetch', e => {

    const res = caches.match(e.request).then(res => {
        if (res) {
            return res;
        } else {
            
            return fetch(e.request).then(newRes => {
                return updateCache(DYNAMIC_CACHE, e.request, newRes);
            });

        }
    });

    e.respondWith(res);

});