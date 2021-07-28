import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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


export const CalendarModal = () => {

    const [isOpen, setisOpen] = useState(true);

    const closeModal = () => {
        setisOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}

        >
                <h1>Hola Mundo</h1>
                <hr></hr>
                <span>Hola de nuevo</span>
        </Modal>
    )
}
