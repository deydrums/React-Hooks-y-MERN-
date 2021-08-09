import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import React from 'react';
import '@testing-library/jest-dom';
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';



const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);
store.dispatch = jest.fn();


const wrapper = mount(
    <Provider store = {store} >
        <DeleteEventFab/>
    </Provider>
)

describe('Pruebas en DeleteEventFab', () => {

    test('Debe de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
});
