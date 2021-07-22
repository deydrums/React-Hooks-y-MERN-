import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    const [formValues, handleInputChange, reset] = useForm({
        hero: q
    });
    const {hero} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])
    //const heroesFiltered = getHeroesByName(hero);


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${hero}`);
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
                            className="btn mt-3 btn-block btn-outline-primary button-search"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="container-imgs-search">
                    <h4>Resultados</h4>
                    <hr/>
                    {   (q === '') &&
                        <div className="alert alert-info">
                            Buscar un heroe...
                        </div>
                    }
                    {   (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">
                            No hay resultados para {q}
                        </div>
                    }
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
