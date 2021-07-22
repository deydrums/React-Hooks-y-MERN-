import React, { useContext, useReducer } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';
import logo from './logo.svg';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Invitado',
                email: 'invitado@invitado.com'
            }
        };
        //Dispatch
        dispatch(action);
        history.replace('/');

    };

    return (
        <>
        <div className="header" id="inicio">
            <div className="login">
                <h1>HeroesApp</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <button
                    className="login-button"
                    onClick={handleLogin}
                >
                    Entrar
                </button>

            </div>
            <footer className="footer-login">Powered by <a href="http://deydrums.com">David Garcia</a></footer>

        </div>


        </>
    )
}
