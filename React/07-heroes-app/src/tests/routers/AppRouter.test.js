import {mount} from 'enzyme';
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from "../../routers/AppRouter";

describe('Pruebas en AppRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            name: 'David'
        }
    }

    test('Debe de mostrar el login si no se esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.login').exists()).toBe(true);

    });

    test('Debe de mostrar el componente marvel si esta autenticado ', () => {
        contextValue.user.logged = true;
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })
    
    
})
