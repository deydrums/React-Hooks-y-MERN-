import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import moment from 'moment';


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { CalendarModal } from '../../../components/calendar/CalendarModal';

// jest.mock( '../../../actions/events', () => ({
//     eventSetActive: jest.fn(),
//     eventStartLoading: jest.fn()

// }));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const now = moment().minutes(0).seconds(0).add(1,'hours').format("YYYY-MM-DDTHH:mm");
const nowPlus1 = moment().minutes(0).seconds(0).add(2,'hours').format("YYYY-MM-DDTHH:mm");


const initState = {
    calendar: {
        events: [],
        activeEvent: {
            title: 'Evento',
            notes: '123456',
            start: now,
            end: nowPlus1
        }
    },
    auth: {
        uid: '123',
        name: 'user'
    },
    ui:{
        modalOpen: true
    }
};

const store = mockStore(initState);
store.dispatch = jest.fn();


const wrapper = mount(
    <Provider store = {store} >
        <CalendarModal/>
    </Provider>
)



describe('Pruebas en CalendarModal', () => {
    
    test('Debe de mostrar el modal', () => {

        //expect((wrapper).find('.modal').exists()).toBe(true);
        expect((wrapper).find('Modal').prop('isOpen')).toBe(true);
        
    });
    
});
