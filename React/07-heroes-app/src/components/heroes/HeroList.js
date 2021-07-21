import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="content-cards">
            {
            heroes.map(hero =>(
                <HeroCard 
                    key={hero.id}
                    {...hero}
                >
                    
                </HeroCard>
            ))
            
            }
            
        </div>
    )
}
