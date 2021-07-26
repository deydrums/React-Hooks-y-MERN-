import Swal from 'sweetalert2';
import {firebase, googleAuthProvider } from '../firebase/firebase-config';
import { ErrTrad } from '../helpers/ErrTrad';
import { types } from "../types/types";
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email,password) =>{
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login(user.uid,user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                dispatch(finishLoading());
                Swal.fire('Ha ocurrido un error',ErrTrad(e.code), 'error');
            });
    }
};

export const startRegisterEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user}) =>{
                await user.updateProfile({displayName: name});
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch(e => {
                dispatch(finishLoading());
                Swal.fire('Ha ocurrido un error',ErrTrad(e.code), 'error');
            });
    }
    
};


export const startGoogleLogin = () =>{
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) =>{
                dispatch(
                    login(user.uid, user.displayName)
                )
                dispatch(finishLoading())
            })
            .catch(e => {
                Swal.fire('Ha ocurrido un error',ErrTrad(e.code), 'error');
                dispatch(finishLoading())
            });;
    }
};

export const login = (uid, displayName) => ({
        type: types.login,
        payload:{
            uid,
            displayName
    }
});

export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(noteLogout());
    }
};

export const logout = () => ({
    type: types.logout
})
