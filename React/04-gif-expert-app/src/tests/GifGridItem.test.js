// npm run test

import { GifGridItem } from "../components/GifGridItem";
import { shallow } from "enzyme";
import React from 'react'

describe('Pruebas en <GifGridItem></GifGridItem>', () => {
    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem/>);
        expect (wrapper).toMatchSnapshot();
    })
    
    
})
