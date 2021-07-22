import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        history.replace('/');
    };

    return (
        <>
        <div className="header" id="inicio">
            <div className="login">
                <h1>HeroesApp</h1>
                <hr/>
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
