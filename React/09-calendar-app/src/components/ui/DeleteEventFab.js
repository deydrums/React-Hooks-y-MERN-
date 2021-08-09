import React from 'react';
import { useDispatch } from 'react-redux';
import { eventStartDelete } from '../../actions/events';
import { uiCloseModal } from '../../actions/ui';


export const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(eventStartDelete());
        dispatch(uiCloseModal());
    }


    return (
        <button
            className = "btn btn-danger fab-danger"
            onClick={handleDelete}
        >
            <i className="fas fa-trash"></i>
            <span> Borrar</span>
        </button>
    )
}
