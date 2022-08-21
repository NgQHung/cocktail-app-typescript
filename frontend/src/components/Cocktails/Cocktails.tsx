import React, { useState } from "react";
import CocktailItem from "./CocktailItem";
import { Cocktail } from "../../App";

interface Props {
    cocktailData: Cocktail[];
}

const Cocktails: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-wrap justify-center">
            {props.cocktailData.map((coc) => (
                <CocktailItem
                    key={coc.idDrink}
                    id={coc.idDrink}
                    name={coc.strDrink}
                    image={coc.strDrinkThumb}
                />
            ))}
        </div>
    );
};

export default Cocktails;
