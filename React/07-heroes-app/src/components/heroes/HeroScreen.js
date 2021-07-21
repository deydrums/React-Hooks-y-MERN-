import React from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
    const history = useHistory();

    const {heroeId} = useParams();
    
    const hero = getHeroesById(heroeId);
    if(!hero) {
        return <Redirect to = '/'/>;
    }
    
    const handleReturn = () =>{
        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className = "row mt-5">
            <div className = "col-4">
                <img
                    src = {`../assets/heroes/${heroeId}.jpg`}
                    alt = {superhero}
                    className = "img-thumbnail"
                />
            </div>
            <div className = "col-8">
                <h3>{superhero}</h3>
                <ul className = "list-group list-group-flush">
                    <li className = "list-group-item">{alter_ego}</li>
                    <li className = "list-group-item">{publisher}</li>
                    <li className = "list-group-item">{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    className = "btn btn-outline-primary"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>

        </div>
    )
}
