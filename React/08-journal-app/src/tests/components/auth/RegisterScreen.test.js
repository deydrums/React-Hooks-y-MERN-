import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import {mount} from 'enzyme';
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { types } from "../../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth:{
        uid: {},
    },
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
//store.dispatch = jest.fn();

describe('Pruebas en RegisterScreen', () => {
    beforeEach(() => {
        //store = mockStore(initState);
        jest.clearAllMocks();
    });

    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter>
                 <RegisterScreen/>
            </MemoryRouter>
        </Provider>
    );

   test('Debe de mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
   });

   test('Debe de hacer el dispatch de la accion respectiva', () => {
        const emailField = wrapper.find('input[name="email"]');
        emailField.simulate('change',{
            target: {
                value: '',
                name: 'email'
            }
        });
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: types.uiSetError,
            payload: 'Nombre es requerido'
        }]);
   });

   test('Debe de mostrar la caja de alerta con el error', () => {
        const initState = {
            auth:{
                uid: {},
            },
            ui: {
                loading: false,
                msgError: 'Email no es correcto'
            }
        };
        
        const store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);

   });

});
