import React from 'react';
import {mount} from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Router } from 'react-router-dom';

describe('Pruebas en HeroScreen', () => {
    const history = {
        push: jest.fn(),
        length: 10,
        goBack: jest.fn(),
    }

    const wrapper = mount(
        <MemoryRouter initialEntries = {['/hero']}>
                <HeroScreen history={history}/>
        </MemoryRouter>

        
    );

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });
    
})
