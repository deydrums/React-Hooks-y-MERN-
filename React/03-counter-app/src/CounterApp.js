// rafcp
import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) =>{

    return (
        <>
            <h1>CounterApp</h1>
            <p>{value}</p>
        </>
    );
      
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;