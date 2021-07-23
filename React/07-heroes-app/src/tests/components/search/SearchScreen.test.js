import React from 'react'
import {mount} from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en SearchScreen', () => {

    test('Debe de mostrarse correctamente con valores por defecto ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries = {['/search']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un heroe...');
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de mostrar a Iron Man y el input con el valor del queryString ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries = {['/search?q=iron%20man']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('iron man');
        expect(wrapper.find('HeroCard').exists()).toBe(true);
    });

    test('Debe de mostrar "No hay resultados" si el query es incorrecto ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries = {['/search?q=noexist']}>
                <Route path="/search" component={SearchScreen}/>
            </MemoryRouter>
        );
        expect(wrapper.find('input').prop('value')).toBe('noexist');
        expect(wrapper.find('HeroCard').exists()).toBe(false);
        expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay resultados para noexist');
    });

    test('Debe de llamar el push del history ', () => {
        const history = {
            push: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries = {['/search']}>
                <Route 
                    path="/search" 
                    component={() => <SearchScreen history={history}/>}
                />
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change',{
            target: {
                name: 'hero',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(history.push).toHaveBeenCalledWith("?q=batman");
    });
    
})
