import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
import {shallow} from "enzyme";

describe('Pruebas en el componente <AddCategory></AddCategory>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
    });

    test('Debe de mostrarse correctamente', () => {
        expect (wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        /**
         * 1.Simular el inputChange
         * 2.Simular el submit
         * 3.setCategories se debe haber llamado
         * 4.El valor del input debe de estar ''
         */
         const value = 'Hola';
         wrapper.find('input').simulate('change',{target: {value}});
         wrapper.find('form').simulate('submit',{preventDefault(){}});
         expect(setCategories).toHaveBeenCalledTimes(1);
         expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
         expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
    
})
