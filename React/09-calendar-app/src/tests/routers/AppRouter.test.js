import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { AppRouter } from '../../routers/AppRouter';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Pruebas en <AppRouter />', () => {

    test('Debe de mostrar el loader....', async() => {

        const initState = {
            auth:{
                checking: true,
            }
        };

        const store = mockStore(initState);


        const wrapper = mount( 
            <Provider store={ store }>
                    <AppRouter /> 
            </Provider>

        );
        
        expect(wrapper.find('.page-loader').exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();

    });



    test('Debe de mostrar la ruta publica....', async() => {

        const initState = {
            auth:{
                checking: false,
                uid: null,
            }
        };

        const store = mockStore(initState);


        const wrapper = mount( 
            <Provider store={ store }>
                    <AppRouter /> 
            </Provider>

        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.login-container').exists()).toBe(true);

    });



    test('Debe de mostrar la ruta privada....', async() => {

        const initState = {
            auth:{
                checking: false,
                uid: '123456',
                name: 'David',
            },
            calendar: {
                events: []
            },
            ui: {
                modalOpen: false,
            }
        };

        const store = mockStore(initState);


        const wrapper = mount( 
            <Provider store={ store }>
                    <AppRouter /> 
            </Provider>

        );
        
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('CalendarScreen').exists()).toBe(true);

    });
    
});
