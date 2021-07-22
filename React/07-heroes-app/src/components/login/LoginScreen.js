import React from 'react'
import logo from './logo.svg';

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
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
