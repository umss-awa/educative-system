self.addEventListener('fetch', event => {

    // offlineResp = new Response(`

    //     Bienvenido a la app
    //     Disculpa las molestias, pero 
    //     necesitas internet para cargar la app

    // `);

    // offlineResp = new Response(`
    // <!DOCTYPE html>
    // <html lang="es">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Classes</title>
    // </head>
    // <body>
    //     <h1>Modo Offline</h1>
    // </body>
    // </html>
    // `, {
    //     headers: {
    //         'Content-Type': 'text/html'
    //     }
    // });

    const offlineResp = new fetch('pages/offline.html');

    const resp = fetch(event.request).catch(() => offlineResp);

    event.respondWith(resp);

});