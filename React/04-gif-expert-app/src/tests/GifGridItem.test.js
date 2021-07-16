// npm run test

import { GifGridItem } from "../components/GifGridItem";
import { shallow } from "enzyme";
import React from 'react'

describe('Pruebas en <GifGridItem></GifGridItem>', () => {
    const title = 'Un titulo';
    const url = 'http://github.com/';
    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);
        expect (wrapper).toMatchSnapshot();
    })
})
