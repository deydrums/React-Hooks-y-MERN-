
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
    
    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Yo soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo = {saludo}
                subtitulo = {subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })
    
})
