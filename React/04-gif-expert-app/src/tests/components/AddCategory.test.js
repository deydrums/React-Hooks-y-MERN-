import React from 'react';
import { AddCategory } from "../../components/AddCategory";
import {shallow} from "enzyme";

describe('Pruebas en el componente <AddCategory></AddCategory>', () => {
    const setCategories = ()=> {};

    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<AddCategory setCategories = {setCategories}/>);
        expect (wrapper).toMatchSnapshot();
    })
    
})
