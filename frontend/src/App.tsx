import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pokemons } from "./components/Pokemons";

interface PokemonType {
    name: string;
    url: string;
}

export interface PokemonDetail {
    name: string;
    id: number;
    sprites: {
        front_default: string;
    };
}

function App() {
    // const dispatch = useAppDispatch();
    const [pokemon, setPokemon] = useState<PokemonDetail[]>([]);
    const [clicked, setClicked] = useState(false);
    const [nextUrl, setNextUrl] = useState<string>("");

    const fetchAllCocktail = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20");
        setNextUrl(response.data.next);
        response.data.results.map(async (pokemon: PokemonType) => {
            const pokemonUrl = await axios.get(pokemon.url);
            // if (clicked) {
            //     const morePoke = await axios.get(response.data.next);
            //     console.log(morePoke);
            //     setPokemon((prev) => [...prev, morePoke.data]);
            // }
            setPokemon((prev) => [...prev, pokemonUrl.data]);
        });
    };

    const fetMoreCocktail = async () => {
        const response = await axios.get(nextUrl);
        // console.log(response.data);
        response.data.results.map(async (pokemon: PokemonType) => {
            const pokemonUrl = await axios.get(pokemon.url);
            setPokemon((prev) => [...prev, pokemonUrl.data]);
        });
    };

    const loadMore = () => {
        // setClicked(true);
        fetMoreCocktail();
        // console.log(nextUrl);
    };

    useEffect(() => {
        fetchAllCocktail();
    }, []);

    return (
        <div className="App">
            {/* <button>click</button> */}
            {/* {cocktail} */}
            <Pokemons pokemons={pokemon} />
            <button onClick={loadMore}>Load more</button>
        </div>
    );
}

export default App;
