import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';
import '@testing-library/jest-dom';
import { startLogin } from '../../actions/auth';
import { types } from '../../types/types';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
let store = mockStore(initState);
Storage.prototype.setItem = jest.fn();

describe('Pruebas en las acciones del Auth', () => {
    
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('StartLogin correcto', async() => {
        await store.dispatch(startLogin('dagarcia100@gmail.com', '123456'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                name: expect.any(String)
            }
        })

        expect(localStorage.setItem).toHaveBeenCalledWith('token',expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date',expect.any(Number));

        // const token = localStorage.setItem.mock.calls[0][1];
        // console.log(token);
        
    });
    
    test('StartLogin incorrecto', async() => {
        await store.dispatch(startLogin('dagarcia100@gmail.com', '1234567'));
        let actions = store.getActions();
        expect(actions).toEqual([]);
        expect(Swal.fire).toHaveBeenCalledWith("Error", "Password incorrecto", "error");

        await store.dispatch(startLogin('dagarcia100@gail.com', '123456'));
        actions = store.getActions();
        expect(Swal.fire).toHaveBeenCalledWith("Error", "Usuario no encontrado", "error");

    });
    

});
