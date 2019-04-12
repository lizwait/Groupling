// src/firebase.js
import firebase from 'firebase'

const API_KEY =`${process.env.REACT_APP_API_KEY_FIREBASE}`;

const config = {
        apiKey: API_KEY,
        authDomain: "groupling-31262.firebaseapp.com",
        databaseURL: "https://groupling-e1262.firebaseio.com",
        projectId: "groupling-e1262",
        storageBucket: "groupling-e1262.appspot.com",
        messagingSenderId: "831827654608"
};
firebase.initializeApp(config);
export default firebase;
