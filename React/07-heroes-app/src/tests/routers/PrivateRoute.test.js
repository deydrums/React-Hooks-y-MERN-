import {mount} from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Pruebas en PrivateRoute', () => {
    const props = {
        location:{
            pathname: '/marvel'
        }
    }
    // LOCAL STORAGE
    Storage.prototype.setItem = jest.fn();  


    test('Debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated  = {true}
                    component = { () => <span>Listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", props.location.pathname);
    });
    
})
