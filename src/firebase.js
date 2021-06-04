import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyChLmtxFAAQfQJzQlq8tCk81IA_vGlA9-E",
    authDomain: "vue-walky-talky.firebaseapp.com",
    projectId: "vue-walky-talky",
    storageBucket: "vue-walky-talky.appspot.com",
    messagingSenderId: "579425271320",
    appId: "1:579425271320:web:1b5daf8a2fbfff46d4cd6d"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
