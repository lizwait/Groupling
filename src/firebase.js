// src/firebase.js
import firebase from 'firebase'

const API_KEY =`${process.env.REACT_APP_API_KEY_FIREBASE}`;

const config = {
        apiKey: API_KEY,
        authDomain: "groupling.firebaseapp.com",
        databaseURL: "https://groupling.firebaseio.com",
        projectId: "groupling",
        storageBucket: "groupling.appspot.com",
        messagingSenderId: "302080119462"
};
firebase.initializeApp(config);
export default firebase;
