importScripts('scripts/sw-utils.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-messaging.js');

const STATIC_CACHE      = 'static-v1';
const DYNAMIC_CACHE     = 'dynamic-v1';
const INMUTABLE_CACHE   = 'inmutable-v1';

const APP_SHELL_STATIC = [
    '/',
    'index.html',
    'styles/style.css',
    'scripts/script.js',
    'scripts/ui.js',
    'scripts/db.js',
    'scripts/firebase-config.js',
    'scripts/sw-utils.js',
    'images/favicon.ico',
    'images/icons/android-icon-36.png',
    'images/icons/android-icon-48.png',
    'images/icons/android-icon-72.png',
    'images/icons/android-icon-96.png',
    'images/icons/android-icon-144.png',
    'images/icons/android-icon-192.png',
    'images/icons/android-icon-512.png'
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

    if (e.request.url.indexOf('firestore.googleapis.com') === -1) {
        const res = caches.match(e.request).then(res => {
            if (res) {
                return res;
            } else {
                
                return fetch(e.request).then(newRes => {
                    return updateCache(DYNAMIC_CACHE, e.request, newRes);
                });
    
            }
        }).catch(error => console.log('No se encontro conexion a internet, error en peticiones firebase'));
    
        e.respondWith(res);
    }

});

// sw para notificaciones

firebase.initializeApp({
    apiKey: "AIzaSyA4qxWI-E5SN9gmKR24XPeJjEeGYjOe9a8",
    authDomain: "awa-pwa.firebaseapp.com",
    databaseURL: "https://awa-pwa.firebaseio.com",
    projectId: "awa-pwa",
    storageBucket: "awa-pwa.appspot.com",
    messagingSenderId: "863488985570",
    appId: "1:863488985570:web:58057f5214a133b85191bb"
});

const messaging = firebase.messaging();