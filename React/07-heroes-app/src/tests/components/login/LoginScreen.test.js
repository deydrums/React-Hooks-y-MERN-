import React from 'react';
import {mount} from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Pruebas en LoginScreen', () => {

    const contextValue = {
        dispatch: jest.fn(),
    }

    const history = {
        replace: jest.fn()
    }

    const wrapper = mount(
                        <AuthContext.Provider value={contextValue}>
                            <LoginScreen history={history}/>
                        </AuthContext.Provider>
                        );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegacion', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
        expect(contextValue.dispatch).toHaveBeenCalledWith(
            {
                type: types.login,
                payload: {
                    name: 'Invitado',
                    email: 'invitado@invitado.com'
                }
            }
        );
        expect(history.replace).toHaveBeenCalledTimes(1);
        expect(history.replace).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');

    });
    
})
