import {mount} from 'enzyme';
import React from 'react';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en DashboardRoutes', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'David', 
            email: 'dagarcia100@gmail.com'
        }
    }

    test('Debe mostrarse correctamente', () => {
        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <DashboardRoutes/>
                </AuthContext.Provider>
            </MemoryRouter>
            
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.email);
    });
})
