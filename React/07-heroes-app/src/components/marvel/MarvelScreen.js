import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className="title">Marvel Héroes</h1>
            <hr/>
            <HeroList publisher = {'Marvel Comics'}/>
        </div>
    )
}
