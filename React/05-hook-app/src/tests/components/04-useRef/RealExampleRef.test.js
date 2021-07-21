import React from 'react';
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";
import {shallow} from 'enzyme';

describe('Pruebas en <RealExampleRef/>', () => {
    const wrapper = shallow(<RealExampleRef/>);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('Debe mostrare el componente <MultipleCustomHooks/>', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        console.log(wrapper.find('MultipleCustomHooks'));
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

        //expect(wrapper.find('p').text().trim()).toBe(value);
    });  
})
