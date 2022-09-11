import React, { Fragment, useState } from "react";
import CocktailItem from "./CocktailItem";
import { Button, ButtonLoadMore } from "../../UI/Button";
import { Cocktail } from "../../models/cocktails";
import { Link, useLocation } from "react-router-dom";
import Signin from "../Form/Signin";
import Signup from "../Form/Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

interface Props {
    cocktailData: Cocktail[];
    selectedType?: string;
    loadMore?: () => void;
    amountCocktail?: number;
}

const Cocktails: React.FC<Props> = (props) => {
    const error = props.cocktailData === null;
    const dataIsEmpty = props.cocktailData.length === 0;
    const location = useLocation();
    const isSignin = location.pathname === "/signin";
    const isSignup = location.pathname === "/signup";
    // console.log(props.cocktailData.length);
    const ingredient = props.selectedType === "ingredient_id";
    const amountCocktail = props?.amountCocktail!;
    return (
        <Fragment>
            {/* <div
                className={`${
                    !error && !dataIsEmpty ? "bg-cocktail" : "hidden"
                } flex flex-wrap justify-center py-12 `}
            > */}
            <div className=" 2xl:container 2xl:mx-auto">
                <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                    <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
                        Summer Collection Vol-1
                    </p>
                </div>
                <div className=" py-6 lg:px-20 md:px-6 px-4">
                    {/* <p className=" font-normal text-sm leading-3 text-gray-600 ">
                        <Link to="/">Home</Link> / Shop by Category / Women
                    </p>
                    <hr className=" w-full bg-gray-200 my-6" /> */}

                    <div className=" flex justify-between items-center">
                        <div className=" flex space-x-3 justify-center items-center">
                            <FontAwesomeIcon icon={faFilter} />
                            <p className=" font-normal text-base leading-4 text-gray-800">Filter</p>
                        </div>
                        <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
                            Showing {amountCocktail - 20} products
                        </p>
                    </div>

                    <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
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
                </div>

                <div
                    className={`${
                        !error && !dataIsEmpty ? "" : "hidden"
                    } flex justify-center mt-12 mb-12 cursor-pointer `}
                >
                    {!error && !dataIsEmpty ? (
                        // <div className="border-2 rounded-xl p-2 hover:bg-red-300">
                        //     <Button clickHandler={props.loadMore}>Load more</Button>
                        // </div>
                        <div className=" flex justify-center items-center">
                            <ButtonLoadMore clickHandler={props.loadMore}>Load More</ButtonLoadMore>
                        </div>
                    ) : null}
                    {isSignin && !isSignup ? <Signin /> : null}
                    {!isSignin && isSignup ? <Signup /> : null}
                </div>
            </div>
        </Fragment>
    );
};

export default Cocktails;
