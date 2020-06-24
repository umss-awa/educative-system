// Ver si se puede usar SW
if (navigator.serviceWorker) {

    navigator.serviceWorker.register('/sw.js')
    .then(reg => {
        // setTimeout(() => {

        //     reg.sync.register('posteo-dota');
        //     console.log('Se envio dota al server!!!');

        // }, 3000);

        Notification.requestPermission().then(result => {
    
            console.log(result);
            reg.showNotification('Hola que tal');

        });

    });


}

// fetch('https://reqres.in/api/users')
// .then(resp => resp.text())
// .then(console.log);