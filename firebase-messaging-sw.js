importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


// Initialize Firebase
var config = {
    apiKey: "abc",
    authDomain: "abc",
    databaseURL: "abc",
    projectId: "abc",
    storageBucket: "abc",
    messagingSenderId: "abc",
    appId: "abc"
};


firebase.initializeApp(config);
const messaging = firebase.messaging();
