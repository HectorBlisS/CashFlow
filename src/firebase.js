import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBzD4uPbVH2TQ52fmYrExTrRjbt7_cb9is",
     authDomain: "cash-b4513.firebaseapp.com",
     databaseURL: "https://cash-b4513.firebaseio.com",
     projectId: "cash-b4513",
     storageBucket: "cash-b4513.appspot.com",
     messagingSenderId: "224015766489"

};
firebase.initializeApp(config);

export default firebase;
