import React from 'react';
import {mount} from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en HeroScreen', () => {
    const history = {
        push: jest.fn(),
        length: 10,
        goBack: jest.fn(),
    }



    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries = {['/hero']}>
                    <HeroScreen history={history}/>
            </MemoryRouter>  
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('Debe de mostrar un hero si el parametro existe y se encuetra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries = {['/hero/marvel-captain']}>
                    <Route path="/hero/:heroeId" component={HeroScreen} />
            </MemoryRouter>  
        );
        expect(wrapper.find('.container-heroe').exists()).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        const history = {
            push: jest.fn(),
            length: 1,
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries = {['/hero/marvel-captain']}>
                    <Route path="/hero/:heroeId" component={() => <HeroScreen history={history}/>} />
            </MemoryRouter>  
        );
    
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('Debe de regresar a la pantalla anterior', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries = {['/hero/marvel-captain']}>
                    <Route path="/hero/:heroeId" component={() => <HeroScreen history={history}/>} />
            </MemoryRouter>  
        );
    
        wrapper.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledTimes(0);
        expect(history.push).not.toHaveBeenCalled();
        expect(history.goBack).toHaveBeenCalled();
        expect(history.goBack).toHaveBeenCalledTimes(1);
    });

    test('Debe de llamar el redirect si el hero no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries = {['/hero/marvel-captain123123']}>
                    <Route path="/hero/:heroeId" component={() => <HeroScreen history={history}/>} />
            </MemoryRouter>  
        );
    
        expect(wrapper.text()).toBe('');
    });
    

})
