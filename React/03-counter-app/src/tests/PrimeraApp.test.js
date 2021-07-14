
import { render } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp/>', () => {
    // test('Demostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     //const wrapper = render(<PrimeraApp saludo ={saludo} />)
    //     const {getByText} = render(<PrimeraApp saludo ={saludo} />)
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>);
        expect (wrapper).toMatchSnapshot();
    })
    
})
