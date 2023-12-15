// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

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
