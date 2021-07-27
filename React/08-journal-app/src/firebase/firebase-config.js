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

const firebaseConfigTesting = {
    apiKey: "AIzaSyC15g8qKdulcmjbnoxROJ843TSk2HZimbg",
    authDomain: "tests-caa2d.firebaseapp.com",
    projectId: "tests-caa2d",
    storageBucket: "tests-caa2d.appspot.com",
    messagingSenderId: "743724009913",
    appId: "1:743724009913:web:1b3c96d741b92a17a94e68"
  };

if(process.env.NODE_ENV === 'test') {
    //testing
    firebase.initializeApp(firebaseConfigTesting);
}else{
    //dev/prod
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}