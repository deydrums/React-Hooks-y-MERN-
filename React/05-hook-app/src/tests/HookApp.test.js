import { shallow } from "enzyme";
import React from 'react';
import { HookApp } from "../HookApp";


describe('Pruebas en el componente <HookApp></HookApp>', () => {

    test('Debe de mostrarse el componente <HookApp></HookApp>', () => {
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    })
})