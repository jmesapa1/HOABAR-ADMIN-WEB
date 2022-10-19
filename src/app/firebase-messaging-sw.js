importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyB4EWHxqlGZ46qXTl1a5XNUccHzNwOwgak",
    authDomain: "hoabar-c7876.firebaseapp.com",
    databaseURL: "https://hoabar-c7876-default-rtdb.firebaseio.com",
    projectId: "hoabar-c7876",
    storageBucket: "hoabar-c7876.appspot.com",
    messagingSenderId: "680650261791",
    appId: "1:680650261791:web:42f80e9b734f95d6a15c2a",
    measurementId: "G-EFR5869GQ7"
});
const messaging = firebase.messaging();