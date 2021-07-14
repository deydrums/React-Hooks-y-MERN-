import React from  'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

const saludo = <h1>Hola mundo</h1>;
const divRoot = document.querySelector('#app');

//ReactDOM.render(<PrimeraApp saludo = "Hola, Soy Goku"></PrimeraApp>, divRoot);

ReactDOM.render(<CounterApp value = {10}></CounterApp>, divRoot);

