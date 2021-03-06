import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initState = {
    checking: true,
}

describe('Pruebas en authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer(initState,{});
        expect(state).toEqual(initState);
    });

    test('Logout correcto', () => {
        const action = ({
            type: types.authLogout
        })
        const state = authReducer(initState,action);
        expect(state).toEqual({checking:false});
    });
    

    test('Debe autenticar al usuario', () => {

        const action = ({
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'David'
            }
        })

        const state = authReducer(initState,action);
        expect(state).toEqual({checking: false, uid: '123', name: 'David'})
    });
    
});
