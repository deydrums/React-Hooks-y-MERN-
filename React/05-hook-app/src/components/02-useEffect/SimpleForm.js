import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        // console.log('hey');
    },[]);

    useEffect(() => {
        // console.log('El form cambio');
    },[formState]);

    useEffect(() => {
        // console.log('El email cambio');
    },[email]);


    const handleInputChange = ({target}) => {
        setformState({
            ...formState,
            [target.name]:target.value
        });
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className = "form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value = {name}
                    onChange={handleInputChange}
                />
            </div>

            <div className = "form-group mt-1">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value = {email}
                    onChange={handleInputChange}
                />
            </div>

            {(name === '123') && <Message/>}


        </>
    )
}
