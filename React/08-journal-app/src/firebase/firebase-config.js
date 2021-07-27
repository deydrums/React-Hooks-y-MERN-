import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyC15g8qKdulcmjbnoxROJ843TSk2HZimbg",
//     authDomain: "tests-caa2d.firebaseapp.com",
//     projectId: "tests-caa2d",
//     storageBucket: "tests-caa2d.appspot.com",
//     messagingSenderId: "743724009913",
//     appId: "1:743724009913:web:1b3c96d741b92a17a94e68"
//   };

// if(process.env.NODE_ENV === 'test') {
//     //testing
//     firebase.initializeApp(firebaseConfigTesting);
// }else{
//     //dev/prod
//     firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    db,
    googleAuthProvider,
    firebase
}