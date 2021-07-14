import { render } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('Pruebas en <CounterApp/>', () => {
    test('Debe de mostrar <CounterApp/> correctamente', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value = {value}/>);
        expect (wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value = {100}/>);
        const vdefecto = wrapper.find('p').text().trim();
        console.log(vdefecto);
        expect(vdefecto).toBe('100');
       
    })
    
})