import React, { Fragment, useState } from "react";
import CocktailItem from "./CocktailItem";
import Header from "../../Layouts/Header";
import { Button } from "../../UI/Button";
import Navigation from "../../pages/Navigation";
import { Cocktail } from "../../models/cocktails";
import { Route, Routes, useLocation } from "react-router-dom";

interface Props {
    cocktailData: Cocktail[];
    loadMore: () => void;
}

const Cocktails: React.FC<Props> = (props) => {
    const location = useLocation();
    return (
        <Fragment>
            {/* <div className="">
                <Header />
            </div> */}
            {/* <Navigation /> */}

            <div className="flex flex-wrap justify-center">
                {/* <Routes>
                    <Route
                        path={`${location.pathname}/:id`}
                        element= */}
                {props.cocktailData.map((coc) => (
                    <CocktailItem
                        key={coc.idDrink}
                        id={coc.idDrink}
                        name={coc.strDrink}
                        image={coc.strDrinkThumb}
                    />
                ))}
                {/* />
                </Routes> */}
            </div>
            <div className="flex justify-center ">
                <Button clickHandler={props.loadMore}>Load more</Button>
            </div>
        </Fragment>
    );
};

export default Cocktails;
