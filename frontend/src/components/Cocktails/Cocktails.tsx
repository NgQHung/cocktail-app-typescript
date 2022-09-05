import React, { Fragment, useState } from "react";
import CocktailItem from "./CocktailItem";
import { Button } from "../../UI/Button";
import { Cocktail } from "../../models/cocktails";

interface Props {
    cocktailData: Cocktail[];
    loadMore?: () => void;
}

const Cocktails: React.FC<Props> = (props) => {
    // console.log(props.cocktailData);
    const error = props.cocktailData === null;
    return (
        <Fragment>
            <div className="flex flex-wrap justify-center">
                {props.cocktailData?.map((coc) => (
                    <CocktailItem
                        key={coc.idDrink}
                        id={coc.idDrink}
                        name={coc.strDrink}
                        image={coc.strDrinkThumb}
                    />
                ))}
                {error && <p>There are no such cocktail</p>}
            </div>
            <div className="flex justify-center ">
                {!error && <Button clickHandler={props.loadMore}>Load more</Button>}
            </div>
        </Fragment>
    );
};

export default Cocktails;
