import {firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";

export const startLoginEmailPassword = (email,password) =>{
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123,'Pedro'));
        }, 3500);
    }
}

export const startRegisterEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user}) =>{
                await user.updateProfile({displayName: name});
                console.log(user);
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch((err) =>{
                console.log(err);
            });
    }
    
}


export const startGoogleLogin = () =>{
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) =>{
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = (uid, displayName) => ({
        type: types.login,
        payload:{
            uid,
            displayName
    }
})