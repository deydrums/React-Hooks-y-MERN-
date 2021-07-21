import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    const heroesFiltered = heroes;
    const [formValues, handleInputChange, reset] = useForm({
        hero: q
    });
    const {hero} = formValues;


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${hero}`);
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
