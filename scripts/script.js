const messaging = firebase.messaging();

if (navigator.serviceWorker) {

    navigator.serviceWorker.register('/sw.js');

}

// Permisos para poder recivir notificaciones
navigator.serviceWorker.ready.then(registration => {

    messaging.useServiceWorker(registration);

}).then(() => {

    messaging.requestPermission().then(() => {

        console.log('Usted Puede Recivir Notificaciones');
        return messaging.getToken();

    }).then(token => {

        console.log('Token:', token);

    }).catch(error => {

        console.log('Ocurrio un Error: ', error);

    });

});

messaging.onMessage(payload => {
    console.log('Mensaje Recivido:', payload);
});
