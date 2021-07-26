import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import validator from 'validator';
import { startRegisterEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state =>state.ui);

    const [formValues, handleInputChange, reset] = useForm({
        name: 'admin',
        email: 'admin@admin.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()){
            dispatch(startRegisterEmailPasswordName(email,password,name));
        }
    };

    const isFormValid = () =>{
        if(name.trim().length ===0){
            dispatch(setError('Nombre es requerido'));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError('Email invalido'));
            return false;
        }else if (password !== password2 || password.length < 5){
            dispatch(setError('Contraseñas no coinciden (deben ser mayor a 4 caracteres)'));
            return false;
        }
        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Registrarse</h3>
            {            
                msgError &&
                <div className="auth__alert-error"> 
                    {msgError}
                </div>
            }            
            <form onSubmit = {handleRegister}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name = "name"
                    className="auth__input"
                    autoComplete="off"
                    onChange = {handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Email..."
                    name = "email"
                    className="auth__input"
                    autoComplete="off"
                    onChange = {handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Contraseña..."
                    name = "password"
                    className="auth__input"
                    onChange = {handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Confirmar contraseña..."
                    name = "password2"
                    className="auth__input"
                    onChange = {handleInputChange}
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
