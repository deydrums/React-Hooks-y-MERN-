import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer({logged: false},{});
        expect(state).toEqual({logged: false});
    });
    test('Debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'David'
            }
        }
        const user = authReducer({logged: false},action);
        expect(user) .toEqual({
            logged: true,
            name: 'David'
        });
    }); 

    test('Debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }
        const user = authReducer({logged: true, name: 'David'},action);
        expect(user) .toEqual({
            logged: false
        });
    });
})
