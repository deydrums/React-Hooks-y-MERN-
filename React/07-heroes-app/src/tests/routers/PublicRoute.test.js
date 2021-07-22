import {mount} from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PublicRoute } from '../../routers/PublicRoute';

describe('Pruebas en PrivateRoute', () => {


    test('Debe de mostrar el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuthenticated  = {false}
                    component = { () => <span>Listo!</span>}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(true);
    });

    test('No debe de mostrar el componente si esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuthenticated  = {true}
                    component = { () => <span>Listo!</span>}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(false);
    });

})
