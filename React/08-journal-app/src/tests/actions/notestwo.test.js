import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk'
import {startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload', () => {
    return {
        fileUpload: () => {
            return Promise.resolve(
                "https://misfotos.com/photo.png"
            );
        },
    };
});
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

global.scrollTo = jest.fn(); 


const initState = {
    auth:{
        uid: 'TESTING',
    },
    notes: {
        active: {
            id: 'sI9BeywBmpmMyq5lF6Rw',
            title: 'Hola',
            body: 'Este es el body',
            url: ''
        }
    }
};

let store = mockStore(initState);

describe('Pruebas con las acciones de notes', () => {
    beforeEach(() => {
        store = mockStore(initState)
    });

    afterAll(() => {
        db.disableNetwork();
    });

    test('startUploading debe de actualizar el url del entry', async() => {
        
        const file = ['lllll'];
 
        await store.dispatch( startUploading( file ) );

        //const docRef = await db.doc('/TESTING/journal/notes/02L6n2ZPdEgpELw8y7ML').get();
        //expect( docRef.data().url ).toBe('https://hola-mundo.com/cosa.jpg');

    })
    
});
