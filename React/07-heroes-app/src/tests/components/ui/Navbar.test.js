import {mount} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import {types} from '../../../types/types';

describe('Pruebas en Navbar', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            name: 'David',
            email: 'dagarcia100@gmail.com'
        }
    }
    
    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={contextValue}>
                <Router history={historyMock}>
                    <Navbar/>
                </Router>
            </AuthContext.Provider>
        </MemoryRouter>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.email);
    });

    test('Debe de llamar el logout y usar el history', () => {
        wrapper.find('.logout').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledTimes(1); 
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });
        expect(historyMock.replace).toHaveBeenCalledTimes(1);
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });

    
})
