import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import moment from 'moment';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal} from '../../actions/ui';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');
const now = moment().minutes(0).seconds(0).add(1,'hours').format("YYYY-MM-DDTHH:mm");
const nowPlus1 = moment().minutes(0).seconds(0).add(2,'hours').format("YYYY-MM-DDTHH:mm");

export const CalendarModal = () => {
    const dispatch = useDispatch();
    const {modalOpen} = useSelector(state =>state.ui);

    const [titleValid, settitleValid] = useState(true);
    const [formValues, handleInputChange, reset] = useForm({
        title: 'Evento',
        notes: '123456',
        start: now,
        end: nowPlus1
    });

    const {title, notes, start, end} = formValues;

    
    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if(momentStart.isSameOrAfter(momentEnd)){
            return Swal.fire('Error','La fecha de finalización debe de ser mayor a la de inicio','error');
        }

        if(title.trim().length<1){
            return settitleValid(false);
        }

        settitleValid(true);
        closeModal();
        
    }

    return (
        <Modal
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}

        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>

                <div className="form-group class1" >
                    <label>Fecha y hora inicio</label>

                    <input 
                        type="datetime-local"  
                        className="form-control" 
                        placeholder="Fecha inicio" 
                        name= 'start'
                        value={start}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <input 
                        type="datetime-local"  
                        className="form-control" 
                        placeholder="Fecha inicio" 
                        name= 'end'
                        onChange={handleInputChange}
                        value={end}
                        min={start}
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
