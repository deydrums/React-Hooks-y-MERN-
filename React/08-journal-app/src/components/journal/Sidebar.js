import React from 'react';
import { JournalEntries } from './JournalEntries';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
       dispatch(startLogout());
    }
    return (
        <nav className = "journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className = "mt-5">
                    <i className="fa fa-moon"></i>
                    <span> David</span>
                </h3>

                <button 
                    className="btn"
                    onClick = {handleLogout}
                >
                    Cerrar sesión
                </button>
            </div>
            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className = "mt-5">Nueva entrada</p>
            </div>
            <JournalEntries/>
        </nav>
    )
}
