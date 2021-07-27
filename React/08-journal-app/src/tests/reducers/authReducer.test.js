import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    const initState = {};

    test('Debe retornar un objeto de usuario (login)', () => {
        const action = {
            type: types.login,
            payload: {
                uid: 'jioau904ujkasjfkn',
                displayName: 'David'
            }
        }

        const state = authReducer(initState, action);
        expect(state).toEqual({
            uid: 'jioau904ujkasjfkn',
            name: 'David' 
        });

    });

    test('Debe retornar un objeto vacio (logout)', () => {

        const initState = {
            uid: 'jioau904ujkasjfkn',
            displayName: 'David'
        }

        const action = {
            type: types.logout,
        }

        const state = authReducer(initState, action);
        expect(state).toEqual({});

    });

    test('Debe retornar el initState', () => {

        const initState = {
            uid: 'jioau904ujkasjfkn',
            displayName: 'David'
        }

        const action = {
            type: 'ninguno',
        }

        const state = authReducer(initState, action);
        expect(state).toEqual(initState);

    });
    
});
