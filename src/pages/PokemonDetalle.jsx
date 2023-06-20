
import React from "react";
import {useParams, useNavigate} from 'react-router-dom';
import { useFetch } from "../hooks/useFetch";

const PokemonDetalle = () => {
    const parasms = useParams();
    const navigate = useNavigate();
    const {data,loading,error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${parasms.name}`);


    return (
        <div className="container d-flex flex-column justify-content-center align-items-center p-3 ">
            {data && (
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body d-flex ">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h1>{data.name}</h1>
                                    <img src={data.sprites.front_default} alt={data.name} style={{ width: '300px', height: '300px' }} />  
                                </div>
                                
                                <div className="descripcion">
                                  <h3>Abilities</h3>
                                <ul>
                                    {data.abilities.map((ability) => (
                                        <li key={ability.ability.name}>{ability.ability.name}</li>
                                    ))}
                                </ul>
                               
                                <h3>Stats</h3>
                                <ul>
                                    {data.stats.map((stat) => (
                                        <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                                    ))}
                                </ul>
                                <h3>Types</h3>
                                <ul>
                                    {data.types.map((type) => (
                                        <li key={type.type.name}>{type.type.name}</li>
                                    ))}
                                </ul>
                                <button className="btn btn-outline-secondary" onClick={() => navigate('/pokemon')}>Regresar</button>   
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>


            )}

        </div>
    )
}

export default PokemonDetalle;