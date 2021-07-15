import React from 'react'

export const GifGridItem = ({title,url}) => {
    return (

        
            <a className="imagen-port" href={url}>
                <img src={url} alt={title} />
            </a>


    )
}
