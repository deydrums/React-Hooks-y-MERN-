import { LoginScreen } from "../../../components/auth/LoginScreen";
import {mount} from 'enzyme';
import { Provider } from "react-redux";

import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import { MemoryRouter } from "react-router-dom";
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


describe('Pruebas en <LoginScreen/>', () => {

    beforeEach(() => {
        store = mockStore(initState)
    });

    test('Debe de mostrar el componente', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Provider store = {store}>
                    <LoginScreen/>
                </Provider>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
});
