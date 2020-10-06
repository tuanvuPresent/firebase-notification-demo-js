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
messaging.requestPermission()
    .then(function () {
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
