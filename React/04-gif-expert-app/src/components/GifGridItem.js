import React from 'react'

export const GifGridItem = ({title,url}) => {
    return (
            <a className="imagen-port" href={url} target="_blank">
                <img src={url} alt={title} />
                <div className="hover-galeria">
                    <img src ="/images/icono1.png" />
                    <p>Abrir</p>
                </div>
            </a>
    )
}
