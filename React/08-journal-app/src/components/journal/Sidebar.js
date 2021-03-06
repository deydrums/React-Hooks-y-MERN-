import React from 'react';
import { JournalEntries } from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state =>state.auth);


    const handleLogout = () => {
       dispatch(startLogout());
    }

    const handleAddEntry = () => {
        dispatch(startNewNote());
    }
    return (
        <nav className = "journal__sidebar">
            <div className="journal__sidebar-btnlogout">
                <button 
                    className="btn"
                    onClick = {handleLogout}
                >
                    Cerrar sesión
                </button>
            </div>
            <div className="journal__sidebar-navbar">
                <i className="fa fa-moon"></i>
                <h3>
                    <span> {name}</span>
                </h3>
            </div>
            <div className="journal__new-entry" onClick={handleAddEntry}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className = "mt-5">Nueva entrada</p>
            </div>
            <JournalEntries/>
        </nav>
    )
}
