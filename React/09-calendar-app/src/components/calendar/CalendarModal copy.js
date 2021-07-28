import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import moment from 'moment';

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
    const [dateStart, setdateStart] = useState(now);
    const [dateEnd, setdateEnd] = useState(nowPlus1);
    
    const [formValues, setformValues] = useState({
        title: 'Evento',
        notes: '123456',
        start: now,
        end: nowPlus1
    });

    const {notes, title} = formValues;

    const handleInputChange = ({target}) => {
        setformValues({
            ...formValues,
            [target.name]:target.value
        });
    }

    const closeModal = () => {
    }

    const handleStartDateChange = (e) => {
        setdateStart(e.target.value);
        setformValues({
            ...formValues,
            start: e.target.value
        });
    }

    const handleEndDateChange = (e) => {
        setdateEnd(e.target.value);
        setformValues({
            ...formValues,
            end: e.target.value
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <Modal
            isOpen={true}
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
                        name= 'date-start'
                        value={dateStart}
                        onChange={handleStartDateChange}
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <input 
                        type="datetime-local"  
                        className="form-control" 
                        placeholder="Fecha inicio" 
                        name= 'date-end'
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        min={dateStart}
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
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
