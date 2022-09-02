import React, { Fragment, useState } from "react";
import CocktailItem from "./CocktailItem";
import Header from "../../Layouts/Header";
import { Button } from "../../UI/Button";
import Navigation from "../../Layouts/Navigation";
import { Cocktail } from "../../models/cocktails";

interface Props {
    cocktailData: Cocktail[];
    loadMore: () => void;
}

const Cocktails: React.FC<Props> = (props) => {
    return (
        <Fragment>
            <div className="">
                <Header />
            </div>
            {/* <Navigation /> */}

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
            <div className="flex justify-center ">
                <Button clickHandler={props.loadMore}>Load more</Button>
            </div>
        </Fragment>
    );
};

export default Cocktails;
