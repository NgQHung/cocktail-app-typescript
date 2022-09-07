import React, { Fragment, useState } from "react";
import CocktailItem from "./CocktailItem";
import { Button } from "../../UI/Button";
import { Cocktail } from "../../models/cocktails";

interface Props {
    cocktailData: Cocktail[];
    selectedType?: string;
    loadMore?: () => void;
}

const Cocktails: React.FC<Props> = (props) => {
    const error = props.cocktailData === null;
    const ingredient = props.selectedType === "ingredient_id";
    return (
        <Fragment>
            <div className="bg-cocktail flex flex-wrap justify-center pb-12 ">
                {!ingredient &&
                    props.cocktailData?.map((coc) => (
                        <CocktailItem
                            key={coc.idDrink}
                            id={coc.idDrink}
                            name={coc.strDrink}
                            image={coc.strDrinkThumb}
                        />
                    ))}
                {ingredient &&
                    props.cocktailData?.map((coc) => (
                        <CocktailItem
                            key={coc.idDrink}
                            id={coc.idIngredient}
                            name={coc.strIngredient}
                            // image={coc.strDrinkThumb}
                        />
                    ))}
                {error && <p>There are no such cocktail</p>}
            </div>
            <div className="flex justify-center mt-12 mb-12  ">
                {!error && (
                    <Button clickHandler={props.loadMore}>
                        <div className="border-2 rounded-xl p-2 hover:bg-red-300">Load more</div>
                    </Button>
                )}
            </div>
        </Fragment>
    );
};

export default Cocktails;
