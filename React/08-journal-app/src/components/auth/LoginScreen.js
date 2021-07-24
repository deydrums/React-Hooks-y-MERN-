import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset] = useForm({
        email: 'admin@admin.com',
        password: '123456'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(12345,'David'));
    }

    return (
        <>
            <h3 className="auth__title">Iniciar sesión</h3>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email..."
                    name = "email"
                    className="auth__input"
                    autoComplete="off"
                    value = {email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password..."
                    name = "password"
                    className="auth__input"
                    value = {password}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className = "btn btn-primary btn-block"
                >
                    Entrar
                </button>
                
                <div className="auth__social-networks">
                    <p>Iniciar con redes sociales</p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Entrar con Google</b>
                        </p>
                    </div>
                </div>
                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Registrarse aquí
                </Link>
            </form>
        </>
    )
}
