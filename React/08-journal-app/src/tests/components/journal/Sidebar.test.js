import React from 'react';
import { mount } from 'enzyme';
import { Sidebar } from '../../../components/journal/Sidebar';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock( '../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));
jest.mock( '../../../actions/notes', () => ({
    startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: 'ABC',
        },
        notes: []
    }
};
const store = mockStore(initState);
store.dispatch = jest.fn();
describe('Pruebas en Sidebar', () => {

    const wrapper = mount(
        <Provider store={store}>
            <Sidebar/>
        </Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar el startLogout', () => {
        wrapper.find('button').prop('onClick')();
        expect(startLogout).toHaveBeenCalledTimes(1);

    });

    test('Debe de llamar el startNewNote', () => {
        wrapper.find('.journal__new-entry').prop('onClick')();
        expect(startNewNote).toHaveBeenCalledTimes(1);
    });
    
});
