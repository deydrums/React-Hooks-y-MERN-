import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (

        <div class="card m-2">
        <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive" alt={superhero}/>
            <div class="card-body">
            <h5 class="card-title">{superhero}</h5>
            <p class="card-text">{alter_ego}</p>
            <p class="card-text">{first_appearance}</p>
            <Link to={`./hero/${id}`}>
                Más...
            </Link>
            </div>
        </div>
    )
}
