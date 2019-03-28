// src/firebase.js
import firebase from 'firebase'
const config = {
        apiKey: "AIzaSyAovWN0avGkJEn8FfAjZmdydLpulKv0rp4",
        authDomain: "groupling.firebaseapp.com",
        databaseURL: "https://groupling.firebaseio.com",
        projectId: "groupling",
        storageBucket: "groupling.appspot.com",
        messagingSenderId: "302080119462"
};
firebase.initializeApp(config);
export default firebase;
