import React, { useMemo } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroesById } from '../../selectors/getHeroById';
// import batman from '../../assets/heroes/dc-batman.jpg'; //Recurso estatico

export const HeroScreen = ({history}) => {
    //const history = useHistory();

    const {heroeId} = useParams();
    
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
    //const hero = getHeroesById(heroeId);
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
        <div className = "container container-heroe">
            <div className = "container-img animate__animated animate__fadeIn">
                <img
                    // src = {`../assets/heroes/${heroeId}.jpg`} //Desde public/assets
                    // src = {batman} // Un import
                    src={heroImages(`./${heroeId}.jpg`).default}
                    alt = {superhero}
                />
            </div>
            <div className = "container-info">
                <h3 className="mt-2">{superhero}</h3>
                <h5 className="mt-2">Datos</h5>
                <ul className = "list-group list-group-flush">
                    <li className = "list-group-item"><span className="badge bg-secondary m-1">Nombre original: </span>{alter_ego}</li>
                    <li className = "list-group-item"><span className="badge bg-secondary m-1">Editorial: </span>{publisher}</li>
                    <li className = "list-group-item"><span className="badge bg-secondary m-1">Por primera vez en: </span> {first_appearance}</li>
                </ul>
                <h5 className="mt-2">Nombres</h5>
                <p className = "list-group-item"> {characters}</p>

                <button 
                    className = "btn btn-outline-primary mibutton"
                    onClick={handleReturn}
                >
                    Volver
                </button>
            </div>

        </div>
    )
}
