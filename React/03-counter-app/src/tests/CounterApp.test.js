import { render } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('Pruebas en <CounterApp/>', () => {
    let wrapper = shallow(<CounterApp/>);
    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    })


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

    test('Debe de incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('p').text().trim();
        expect (counterText).toBe('11');
    })

    test('Debe de decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('p').text().trim();
        expect (counterText).toBe('9');
    })

    test('Debe de colocar el valor por defecto en el btn reset', () => {
        const wrapper = shallow(<CounterApp value = {105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('p').text().trim();
        expect (counterText).toBe('105');

    })
    
    
})