import firebase from 'firebase';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { login } from '../actions/auth';
import { setNotes } from '../actions/notes';
import { LoadingScreen } from '../components/auth/LoadingScreen';
import { JournalScreen } from '../components/journal/JournalScreen';
import { loadNotes } from '../helpers/loadNotes';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                const notes = await loadNotes(user.uid);
                dispatch(setNotes(notes));
            }else{
                setIsLoggedIn(false);
            };
            setCheking(false);
        });
        
    }, [dispatch, setCheking, setIsLoggedIn]);

    if(cheking){
        return (
            <LoadingScreen></LoadingScreen>
        )
    }

    return (
        <Router>
            <Switch>
                <PublicRoute
                    path="/auth" 
                    isAuthenticated = {isLoggedIn}
                    component ={AuthRouter}
                />
                <PrivateRoute 
                    exact 
                    isAuthenticated = {isLoggedIn}
                    path="/" 
                    component ={JournalScreen}
                />
                <Redirect to = "/auth/login"/>
            </Switch>
        </Router>
    )
}
