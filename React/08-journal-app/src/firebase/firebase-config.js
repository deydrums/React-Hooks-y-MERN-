import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
apiKey: "AIzaSyDj8xrvyOfXjn9qFJYre1Sz4DDEnvwzcQU",
authDomain: "react-apps-bafe2.firebaseapp.com",
projectId: "react-apps-bafe2",
storageBucket: "react-apps-bafe2.appspot.com",
messagingSenderId: "650936320724",
appId: "1:650936320724:web:e1b821cca70cead587f141"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}