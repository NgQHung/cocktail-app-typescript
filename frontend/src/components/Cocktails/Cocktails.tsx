import React, { Fragment, useState } from "react";
import CocktailItem from "./CocktailItem";
import { Button } from "../../UI/Button";
import { Cocktail } from "../../models/cocktails";
import { useLocation } from "react-router-dom";
import Signin from "../Form/Signin";
import Signup from "../Form/Signup";

interface Props {
    cocktailData: Cocktail[];
    selectedType?: string;
    loadMore?: () => void;
}

const Cocktails: React.FC<Props> = (props) => {
    const error = props.cocktailData === null;
    const dataIsEmpty = props.cocktailData.length === 0;
    const location = useLocation();
    const isSignin = location.pathname === "/signin";
    const isSignup = location.pathname === "/signup";
    // console.log(props.cocktailData.length);
    const ingredient = props.selectedType === "ingredient_id";
    return (
        <Fragment>
            <div
                className={`${
                    !error && !dataIsEmpty ? "bg-cocktail" : "hidden"
                } flex flex-wrap justify-center py-12 `}
            >
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
            <div
                className={`${
                    !error && !dataIsEmpty ? "" : "hidden"
                } flex justify-center mt-12 mb-12 cursor-pointer `}
            >
                {!error && !dataIsEmpty ? (
                    <div className="border-2 rounded-xl p-2 hover:bg-red-300">
                        <Button clickHandler={props.loadMore}>Load more</Button>
                    </div>
                ) : null}
                {isSignin && !isSignup ? <Signin /> : null}
                {!isSignin && isSignup ? <Signup /> : null}
            </div>
        </Fragment>
    );
};

export default Cocktails;
