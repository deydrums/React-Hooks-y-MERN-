import React, { useContext, useReducer } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { loginImages } from '../../helpers/loginImages';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';

        const action = {
            type: types.login,
            payload: {
                name: 'Invitado',
                email: 'invitado@invitado.com'
            }
        };
        //Dispatch
        dispatch(action);
        history.replace(lastPath);

    };

    return (
        <>
        <div className="header" id="inicio">
            <div className="login">
                <h1>HeroesApp</h1>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <img src={loginImages(`./logo.svg`).default} className="App-logo" alt="logo" />
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
