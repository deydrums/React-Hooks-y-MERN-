import firebase from 'firebase';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
            };
        });
        
    }, []);
    
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
