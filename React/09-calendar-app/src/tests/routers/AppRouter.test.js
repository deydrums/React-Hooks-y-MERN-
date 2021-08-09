import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { AppRouter } from '../../routers/AppRouter';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        checking: true,
    }
};
let store = mockStore(initState);
store.dispatch = jest.fn();

describe('Pruebas en <AppRouter />', () => {

    test('Debe de mostrar el loader....', async() => {
        
        const wrapper = mount( 
            <Provider store={ store }>
                    <AppRouter /> 
            </Provider>

        );
        
        expect(wrapper.find('.page-loader').exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();

    });
    
});
