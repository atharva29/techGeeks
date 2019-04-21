var firebase = require("firebase");
var firebaseConfig = require("./firebaseConfig");

firebase.initializeApp(firebaseConfig);

function getLogin(){
    console.log(document.getElementById('name'));
}