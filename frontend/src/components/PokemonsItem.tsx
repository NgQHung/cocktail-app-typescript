import React from "react";
import { PokemonDetail } from "../App";

interface Props {
    // pokemonItem: PokemonDetail;
    id: number;
    name: string;
    image: string;
}

export const PokemonsItem: React.FC<Props> = (props) => {
    const { name, image, id } = props;

    return (
        <div>
            {name}
            <img src={image} alt={name} />
        </div>
    );
};
