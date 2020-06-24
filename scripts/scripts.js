// Ver si se puede usar SW
if (navigator.serviceWorker) {

    navigator.serviceWorker.register('/sw.js');

}

if (window.caches) {

    // Guardar registros en el chache
    caches.open('primera-prueba');
    caches.open('segundo-prueba');

    // Buscar si existe un registro de chache, promersas
    caches.has('primera-prueba').then(console.log);

    // Eliminar un dato del cache, si existe, sino false
    caches.delete('segundo-prueba').then(console.log);

    // Guardar el chache y su contenido
    caches.open('cache-v1.1').then(cache => {
        
        // Agregar un dato al cache
        cache.add('/index.html');

        // Agregar mas de un dato al cache
        cache.addAll([
            '/index.html',
            '/images/burger.png'
        ]).then(() => {

            // cache.delete('/images/burger.png');
            cache.put('index.html', new Response('Hola Mundo'));

        });

        cache.match('/index.html').then(resp => {
            resp.text().then(console.log);
        });

    });

    caches.keys().then(console.log);

}