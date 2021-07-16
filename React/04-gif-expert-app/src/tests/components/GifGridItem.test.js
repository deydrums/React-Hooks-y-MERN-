// npm run test

import { GifGridItem } from "../../components/GifGridItem";
import { shallow } from "enzyme";
import React from 'react'

describe('Pruebas en <GifGridItem></GifGridItem>', () => {
    const title = 'Un titulo';
    const url = 'http://github.com/';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Debe de mostrar el componente correctamente', () => {
        expect (wrapper).toMatchSnapshot();
    })
    test('Debe de tener un parrafo con el titulo',()=>{
        const p = wrapper.find('p');
        //expect(p.text().trim()).toBe(title);
        expect(p.text().trim()).toBe('Abrir');

    })
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('.gif');
        // console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    test('Debe de tener animate__fadeIn', () => {
        const a = wrapper.find('a');
        expect( a.hasClass('animate__fadeIn') ).toBe(true);
    })
    
    
})
