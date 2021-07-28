import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';

jest.mock('../../../actions/notes', ()=>({
    activeNote: jest.fn()
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
            id: '123456',
            title: 'Hello',
            body: 'Hello Word'
        },
        notes: []
    }
};
const store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en NoteScreen', () => {

    const wrapper = mount(
        <Provider store={store}>
            <NoteScreen/>
        </Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de disparar el active note ', () => {
        wrapper.find('input[name="title"]').simulate('change',{
            target : {
                name: 'title',
                value: 'Hello again',
            }
        });
        expect(activeNote).toHaveBeenCalledTimes(1);
        expect(activeNote).toHaveBeenLastCalledWith(initState.notes.active.id, {"body": "Hello Word", "id": "123456", "title": "Hello again"});
    });
    
});
