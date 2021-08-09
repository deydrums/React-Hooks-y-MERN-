import {mount} from 'enzyme';
import { Provider } from "react-redux";
import Swal from 'sweetalert2';


import configureStore from 'redux-mock-store'; 
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';


jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))

jest.mock('../../../actions/auth',()=>({
    startLogin: jest.fn(),
    startRegister: jest.fn()
}))


const middlewares = [thunk];
const mockStore = configureStore(middlewares);


const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store = {store}>
            <LoginScreen/>
    </Provider>
);


describe('Pruebas en LoginScreen', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });



    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de llamar el dispatch del login', () => {

        wrapper.find('input[name="lemail"]').simulate('change',{
            target: {
                name: 'lemail',
                value: 'test@test.com'
            }
        
        });

        wrapper.find('input[name="lpassword"]').simulate('change',{
            target: {
                name: 'lpassword',
                value: '123456'
            }
        
        });

        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        });

        expect(startLogin).toHaveBeenCalledWith("test@test.com", "123456");

    });

    test('No hay registro si las contraseñas son diferentes', () => {

        wrapper.find('input[name="rpassword"]').simulate('change',{
            target: {
                name: 'rpassword',
                value: '123456'
            }
        
        });

        wrapper.find('input[name="rconfirmPassword"]').simulate('change',{
            target: {
                name: 'rconfirmPassword',
                value: '1234567'
            }
        
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });

        expect(startRegister).toHaveBeenCalledTimes(0);
        expect(Swal.fire).toHaveBeenCalledWith('Error','Las contraseñas no coinciden','error');


    });

    test('Registro con contraseñas iguales', () => {

        wrapper.find('input[name="rname"]').simulate('change',{
            target: {
                name: 'rname',
                value: 'test'
            }
        
        });

        wrapper.find('input[name="remail"]').simulate('change',{
            target: {
                name: 'remail',
                value: 'test@test.com'
            }
        
        });

        wrapper.find('input[name="rpassword"]').simulate('change',{
            target: {
                name: 'rpassword',
                value: '123456'
            }
        
        });

        wrapper.find('input[name="rconfirmPassword"]').simulate('change',{
            target: {
                name: 'rconfirmPassword',
                value: '123456'
            }
        
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });

        expect(startRegister).toHaveBeenCalledTimes(1);
        expect(startRegister).toHaveBeenCalledWith("test", "test@test.com", "123456");

    });
    
    
    
    
});
