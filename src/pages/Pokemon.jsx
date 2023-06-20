import React, {useState} from 'react';
import { useFetch } from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {
    const {data,loading,error} = useFetch('https://pokeapi.co/api/v2/pokemon');
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/pokemon/${selectedPokemon}`);
    }
    return (
        <div className='container'>
            <h1>Selecciona un Pokemon</h1>
            <div className='row'>
                <div className='col-12'>
                    {loading && (
                    <div className='spinner-border text-primary'>
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    )}
                    {data &&  (
                        <div className="input-group mb-3">
                            <select className="form-select" onChange={(e) => setSelectedPokemon(e.target.value)}>
                                <option value="">Selecciona un Pokemon</option>
                                {data.results.map((pokemon) => ( 
                                    <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                                ))}
                            </select>
                            {selectedPokemon && (
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Ver detalles</button>
                            )}
                              
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Pokemon;