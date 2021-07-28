import { login, logout, startLogout } from "../../actions/auth";
import { types } from "../../types/types";
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};
let store = mockStore(initState);

describe('Pruebas en auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    });

    test('Login y logout deben de crear la accion respectiva', () => {
        const user = {
            uid: 'flahoiwhsnn4oh8sahdf',
            displayName: 'David'
        }
        const loginAction = login(user.uid, user.displayName);
        expect(loginAction).toEqual({
            type: types.login,
            payload: user
        });

        const logoutAction = logout();
        expect(logoutAction).toEqual({type: types.logout});
    });

    test('Debe de realizar el logout', async() => {
        await store.dispatch(startLogout());
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: types.logout});
        expect(actions[1]).toEqual({type: types.notesLogoutCleaning});
    });
    
    
});
