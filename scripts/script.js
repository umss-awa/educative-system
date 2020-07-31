const messaging = firebase.messaging();
const url = window.location.href;

let swUrl = '/classes/sw.js'


if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        swUrl = '/sw.js';
    }

    navigator.serviceWorker.register(swUrl);

}

// Permisos para poder recivir notificaciones
navigator.serviceWorker.ready.then(registration => {

    messaging.useServiceWorker(registration);

}).then(() => {

    messaging.requestPermission().then(() => {

        console.log('Tienes permiso');
        return messaging.getToken();

    }).then(token => {

        console.log(token);

    }).catch(error => {

        console.log('Ocurrio un Error: ', error);

    });

});
