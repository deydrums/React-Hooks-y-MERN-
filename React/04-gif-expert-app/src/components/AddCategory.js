import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
//export const AddCategory = ({categories, setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit', inputValue);
        if(inputValue.trim().length > 2){
            //setCategories([...categories, inputValue]);
            setCategories(cats =>[inputValue,...cats]);
            setInputValue('');
        }

    }

    return (
            <form onSubmit={handleSubmit}>
                
                <input 
                    type ="text"
                    value = {inputValue}
                    placeholder="Buscar..."
                    onChange={handleInputChange} 
                />
                <p>{inputValue}</p>
            </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}