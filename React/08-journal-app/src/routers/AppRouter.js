import firebase from 'firebase';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { login } from '../actions/auth';
import { LoadingScreen } from '../components/auth/LoadingScreen';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
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
                <Route path="/auth" component ={AuthRouter}/>
                <Route exact path="/" component ={JournalScreen}/>
                <Redirect to = "/auth/login"/>
            </Switch>
        </Router>
    )
}
