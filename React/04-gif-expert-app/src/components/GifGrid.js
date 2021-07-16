import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
        <hr></hr>
            <section className="portafolio">
                <div className="contenedor">
                    <h2 className="titulo animate__animated animate__fadeIn">{category}</h2>
                    <div className="galeria-port">
                    {loading && <p className ="animate__animated animate__flash">Loading</p>}

                        
                        {
                            images.map(img =>(
                                <GifGridItem 
                                    key = {img.id}
                                    {...img}
                                />
                            ))
                        }
                    </div>
                    </div>
                </section>
        </>
    )
}

GifGrid.prototype = {
    category: PropTypes.string.isRequired
}
