import React from 'react';
import { AddCategory } from "../../components/AddCategory";
import {shallow} from "enzyme";

describe('Pruebas en el componente <AddCategory></AddCategory>', () => {
    const setCategories = ()=> {};
    const wrapper = shallow(<AddCategory setCategories = {setCategories}/>);

    test('Debe de mostrarse correctamente', () => {
        expect (wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target: {value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    
})
