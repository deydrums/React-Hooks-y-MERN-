import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import moment from 'moment';


import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import { eventStartUpdate, eventUnsetActive, eventStartAddNew } from '../../../actions/events';

jest.mock( '../../../actions/events', () => ({
    eventStartUpdate: jest.fn(),
    eventUnsetActive: jest.fn(),
    eventStartAddNew: jest.fn(),
}));



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

    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test('Debe de mostrar el modal', () => {

        //expect((wrapper).find('.modal').exists()).toBe(true);
        expect((wrapper).find('Modal').prop('isOpen')).toBe(true);
        
    });


    test('Debe de llamar la accion de actualizar y cerrar modal', () => {

        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(eventStartUpdate).toHaveBeenCalledWith(initState.calendar.activeEvent);
        expect(eventUnsetActive).toHaveBeenCalled();

    });

    test('Debe de mostrar error si falta el titulo', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(false);

    });
    
    test('Debe de crear un nuevo evento ', () => {
        
        const initState = {
            calendar: {
                events: [],
                activeEvent: null,
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

        wrapper.find('input[name="title"]').simulate('change' ,{
            target: {
                name: 'title',
                value: 'Hello test'
            }
        });

        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(eventStartAddNew).toHaveBeenCalled();
        expect(eventUnsetActive).toHaveBeenCalled();

    });

    
    
    
});
