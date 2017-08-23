import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBguviCtAxfwAyGqt1nCWjtNr3yL9KvDPc",
    authDomain: "cashflow-a881b.firebaseapp.com",
    databaseURL: "https://cashflow-a881b.firebaseio.com",
    projectId: "cashflow-a881b",
    storageBucket: "cashflow-a881b.appspot.com",
    messagingSenderId: "983935095409"
};

firebase.initializeApp(config);

export default firebase;


