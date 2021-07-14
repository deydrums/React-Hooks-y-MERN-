import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react';

describe('Pruebas en <PrimeraApp/>', () => {
    test('Demostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = 'Hola, soy Goku';
        //const wrapper = render(<PrimeraApp saludo ={saludo} />)
        const {getByText} = render(<PrimeraApp saludo ={saludo} />)
        expect(getByText(saludo)).toBeInTheDocument();
    })
})
