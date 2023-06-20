import {Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import PokemonDetalle from '../pages/PokemonDetalle';


const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemon" element={<Pokemon/>}/>
            <Route path="/pokemon/:name" element={<PokemonDetalle/>}/>

        </Routes>
    );
    }

export default AppRouters;