// Initialize Firebase
var config = {
    // apiKey: "abc",
    // authDomain: "abc",
    // databaseURL: "abc",
    // projectId: "abc",
    // storageBucket: "abc",
    // messagingSenderId: "abc",
    // appId: "abc"
    apiKey: "AIzaSyC2l03jXEB2K6iR5ClJzj32X_NW_8fBjv4",
    authDomain: "fcm-test-6b7ab.firebaseapp.com",
    projectId: "fcm-test-6b7ab",
    storageBucket: "fcm-test-6b7ab.appspot.com",
    messagingSenderId: "505282953334",
    appId: "1:505282953334:web:db8d69d9f74dc3100a5f57",
    measurementId: "G-61LZQCJPL0"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission()
    .then(function () {
        console.log('start serviceWorker');
        console.log('serviceWorker' in navigator);
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('./firebase-messaging-sw.js')
            .then(function(registration) {
              console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
              console.error('Service Worker registration failed:', error);
            });
        }
        console.log('I am in here');

        messaging.getToken()
            .then(function (currentToken) {
                console.log(currentToken);
            })
            .catch(function (err) {
                console.log('An error occurred while retrieving token. ', err);
            });

    }).catch(function (err) {
    console.log('Error' + err);
});


messaging.onMessage(function (payload) {
    console.log('onMessage: ', payload);
});
