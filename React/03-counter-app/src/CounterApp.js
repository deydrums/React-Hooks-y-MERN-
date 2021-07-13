// rafcp
import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) =>{

    // handleAdd
    const handleAdd = (e) =>{
        console.log(e);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{value}</p>
            <button onClick={handleAdd}>+1</button>
        </>
    );
      
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;