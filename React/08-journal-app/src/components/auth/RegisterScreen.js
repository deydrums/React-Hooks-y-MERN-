import React from 'react';
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [formValues, handleInputChange, reset] = useForm({
        name: 'admin',
        email: 'admin@admin.com',
        password: '123456',
        password: '123456'
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <h3 className="auth__title">Registrarse</h3>
            <form onSubmit = {handleRegister}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name = "name"
                    className="auth__input"
                    autoComplete="off"
                    onChange = {handleInputChange}
                    value = {name}
                />
                <input
                    type="text"
                    placeholder="Email..."
                    name = "email"
                    className="auth__input"
                    autoComplete="off"
                    onChange = {handleInputChange}
                    value = {email}
                />
                <input
                    type="password"
                    placeholder="Contraseña..."
                    name = "password"
                    className="auth__input"
                    onChange = {handleInputChange}
                    value = {password}
                />
                <input
                    type="password"
                    placeholder="Confirmar contraseña..."
                    name = "password2"
                    className="auth__input"
                    onChange = {handleInputChange}
                    value = {password2}
                />
                <button
                    type="submit"
                    className = "btn btn-primary btn-block mb-3"
                >
                    Registrarse
                </button>
              
                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Logueate aquí
                </Link>
            </form>
        </>
    )
}
