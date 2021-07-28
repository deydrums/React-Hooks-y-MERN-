import { LoginScreen } from "../../../components/auth/LoginScreen";
import {mount} from 'enzyme';
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../../actions/auth";
import '@testing-library/jest-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../actions/auth',() =>({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}));

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
store.dispatch = jest.fn();

describe('Pruebas en <LoginScreen/>', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    const wrapper = mount(
        <Provider store = {store}>
            <MemoryRouter>
                    <LoginScreen/>
            </MemoryRouter>
        </Provider>
    );


    test('Debe de mostrar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de disparar la accion de startGoogleLogin', () => {
        wrapper.find('.google-btn').prop('onClick')();
        expect(startGoogleLogin).toHaveBeenCalledTimes(1);
    });
    
    test('Debe de disparar la accion de startGoogleLogin', () => {
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect(startLoginEmailPassword).toHaveBeenCalledTimes(1);
        expect(startLoginEmailPassword).toHaveBeenCalledWith("","");
    });
    
});
