const url = window.location.href;

let swUrl = '/classes/sw.js'


if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        swUrl = '/sw.js'
    }

    navigator.serviceWorker.register(swUrl);

}