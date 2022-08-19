import React from "react";
import { PokemonsItem } from "./PokemonsItem";
import { PokemonDetail } from "../App";

interface Props {
    pokemons: PokemonDetail[];
}

export const Pokemons: React.FC<Props> = (props) => {
    return (
        <div style={{ display: "flex" }}>
            {props.pokemons.map((item, index) => (
                <PokemonsItem
                    key={index}
                    id={item.id}
                    name={item.name}
                    image={item.sprites.front_default}
                />
                // <div>{item.name}</div>
            ))}
        </div>
    );
};
