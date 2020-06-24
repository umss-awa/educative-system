// Ciclo de vida del SW

self.addEventListener('install', event => {

    console.log('Instalando SW!!!!!!!');

    const install = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log('Instalación terminada');
            self.skipWaiting();
            resolve();
        }, 1);

    });

    

    event.waitUntil(install);

});

// Cuando el SW toma el cotrol de la app

self.addEventListener('activate', event => {
    
    console.log('SW activado y listo para usarse');

});


// FETCH: Manejo de peticiones HTTP

self.addEventListener('fetch', event =>  {

    //Aplicar estrategias del cache

    // console.log('SW:', event.request.url);

    // if (event.request.url.includes('https://reqres.in/')) {
        
    //     const resp = new Response(`{ok: false, mensaje: 'jajajaja'}`);

    //     event.respondWith(resp);

    // }

});

self.addEventListener('sync', event => {

    console.log('Conexión en linea!!!');
    console.log(event);
    console.log(event.tag);

});


// PUSH: Manejar las push notifiations

self.addEventListener('push', event => {

    console.log('Notificación recivida');

});