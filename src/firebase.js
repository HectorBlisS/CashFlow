import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDlE59HwBaOOnp6jJ475Wm-j4t9izg836c",
    authDomain: "tallerfixter-f7f34.firebaseapp.com",
    databaseURL: "https://tallerfixter-f7f34.firebaseio.com",
    projectId: "tallerfixter-f7f34",
    storageBucket: "tallerfixter-f7f34.appspot.com",
    messagingSenderId: "904827933328"
  };

  firebase.initializeApp(config);

export default firebase;