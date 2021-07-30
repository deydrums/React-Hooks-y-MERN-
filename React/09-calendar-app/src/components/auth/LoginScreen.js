import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';


export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange, resetLogin] = useForm({
        lemail: 'dagarcia100@gmail.com',
        lpassword: '123456'
    });

    const [formRegisterValues, handleRegisterInputChange, resetRegister] = useForm({
        rname: 'David',
        remail: 'dagarcia100@gmail.com',
        rpassword: '123456',
        rconfirmPassword: '123456'
    });

    const{ lemail, lpassword } = formLoginValues;
    const{ rname, remail, rpassword, rconfirmPassword } = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lemail, lpassword));
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(rpassword !== rconfirmPassword){
            return Swal.fire('Erro','Las contraseñas no coinciden','error');
        }
        dispatch(startRegister(rname,remail,rpassword));
    }

    return (
        
        <div className="principal-login-container">
            <div className="login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="lemail"
                                    value={lemail}
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="lpassword"
                                    value={lpassword}
                                    onChange={handleLoginInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login" 
                                />
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 login-form-2">
                        <h3>Registro</h3>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    onChange = {handleRegisterInputChange}
                                    name="rname"
                                    value={rname}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo"
                                    onChange = {handleRegisterInputChange}
                                    name="remail"
                                    value={remail}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña" 
                                    onChange = {handleRegisterInputChange}
                                    name="rpassword"
                                    value={rpassword}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Repita la contraseña" 
                                    onChange = {handleRegisterInputChange}
                                    name="rconfirmPassword"
                                    value={rconfirmPassword}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="submit" 
                                    className="btnSubmit" 
                                    value="Crear cuenta" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}