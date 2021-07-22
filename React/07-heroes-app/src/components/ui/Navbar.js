import React, { useContext, useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import logo from '../login/logo.svg';

export const Navbar = () => {
    const {user:{name, email}} = useContext(AuthContext);
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logo} className="App-logo navbar-logo" alt="logo" />
                    <Link 
                        className="navbar-brand" 
                        to="/"
                    >
                        HeroesApp
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>


                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/dc"
                            >
                                DC
                            </NavLink>



                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link" 
                                exact
                                to="/search"
                            >
                                Buscar
                            </NavLink>
                        </div>

                        <div className="navbar-nav navbar-right">

                            <span className="nav-item nav-link text-info">{email}</span>
                            <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/login"
                            >
                                Logout
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

    )
}