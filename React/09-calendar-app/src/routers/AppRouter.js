import React from 'react';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/" component={CalendarScreen}/>
                </Switch>
            </div>
        </Router>
    )
}
