import React from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const [formValues, handleInputChange, reset] = useForm({
        hero: ''
    });
    const {hero} = formValues;

    const heroesFiltered = heroes;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(hero);
        reset();
    }

    return (
        <div>
            <h1 className="title">Buscar Héroe</h1>
            <hr></hr>
            <div className="container-heroe-search">
                <div className="container-search">
                    <h4>Buscar</h4>
                    <hr></hr>
                    <form
                        onSubmit = {handleSearch}
                    >
                        <input
                            type="text"
                            placeholder="Buscar heroe..."
                            className="form-control"
                            name = 'hero'
                            autoComplete="off"
                            value = {hero}
                            onChange={handleInputChange}
                        >
                        </input>
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="container-imgs-search">
                    <h4>Resultados</h4>
                    <hr/>
                    <div className="content-cards animate__animated animate__fadeIn">
                        {
                            heroesFiltered.map(hero=>(
                                <HeroCard
                                    key = {hero.id}
                                    {...hero}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
