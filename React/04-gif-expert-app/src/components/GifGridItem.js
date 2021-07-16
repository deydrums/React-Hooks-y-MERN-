import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({title,url}) => {
    return (
            <a className="imagen-port animate__animated animate__fadeIn" href={url} target="_blank">
                <img className = 'gif' src={url} alt={title} />
                <div className="hover-galeria">
                    <img src ="/images/icono1.png" />
                    <p>Abrir</p>
                </div>
            </a>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}



/*
    1.Enzyme
    2.Enzyme to Json
    3.Debe de mostrar el componente correctamente
        *shallow
        *wrapper
        *wraper .toMatchSnapshot()

*/