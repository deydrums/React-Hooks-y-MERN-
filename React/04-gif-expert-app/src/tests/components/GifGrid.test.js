import { GifGrid } from "../../components/GifGrid"
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import React from 'react';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid></GifGrid>', () => {
    const category = 'Dragon Ball';

    test('Debe de mostrarse el componente <GifGrid></GifGrid>', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category = {category}/>);
        expect (wrapper).toMatchSnapshot();
    });
    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'ABC Title'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect (wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
})
