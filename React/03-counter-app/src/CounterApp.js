// rafcp
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) =>{

    const [counter, setCounter] = useState(value); // []


    // handleAdd
    const handleAdd = () =>{
        //setCounter(counter +1);
        setCounter((c)=> c+1);
    }

    // handleSus
    const handleSubtract = () =>{
        setCounter(counter - 1);
    }

    // reset
    const reset = () =>{
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>

        </>
    );
      
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;