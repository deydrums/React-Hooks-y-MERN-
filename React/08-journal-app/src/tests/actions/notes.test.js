/*** @jest-environment node */


import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk'
import { startLoadingNotes, startNewNote, startSaveNote } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        uid: 'TESTING',
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

    test('Debe de crear una nueva nota startNote', async() => {
        await store.dispatch(startNewNote());
        const actions = store.getActions();
        //console.log(actions);
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });
        const docId = actions[1].payload.id;
        await db.doc(`TESTING/journal/notes/${docId}`).delete();
    });

    test('startLoadingNotes Debe de cargar las notas ', async() => {
        await store.dispatch(startLoadingNotes('TESTING'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });
        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        };
        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('startSaveNote debe de actualizar la nota', async() => {
        const note = {
            id: 'sI9BeywBmpmMyq5lF6Rw',
            title: 'titulo',
            body: 'body'
        };
        await store.dispatch(startSaveNote(note));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesUpdated,
            payload: expect.any(Object)
        });
        const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
        expect(docRef.data().title).toEqual(note.title);

    });
    
    
    
});
