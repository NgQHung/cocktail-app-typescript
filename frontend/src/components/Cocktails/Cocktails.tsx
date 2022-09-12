import React, { Fragment, useState, useEffect } from "react";
import CocktailItem from "./CocktailItem";
import { Button, ButtonLoadMore } from "../../UI/Button";
import { Cocktail } from "../../models/cocktails";
import { Link, useLocation } from "react-router-dom";
import Signin from "../Form/Signin";
import Signup from "../Form/Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { AlertSuccess } from "../../UI/Alert";
import { useDispatch } from "react-redux";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { notificationSliceActions } from "../../store/notification-slice";

interface Props {
    cocktailData?: Cocktail[];
    selectedType?: string;
    loadMore?: () => void;
    amountCocktail?: number;
}

const Cocktails: React.FC<Props> = (props) => {
    const error = props.cocktailData === null;
    const dataIsEmpty = props.cocktailData?.length === 0;
    const dispatch = useDispatch();

    const alert: any = useSelector<any>((state) => state.notificationSlice.alertAdded);
    // console.log(alert);

    const location = useLocation();
    const isSignin = location.pathname === "/signin";
    const isSignup = location.pathname === "/signup";
    // console.log(props.cocktailData.length);
    const ingredient = props.selectedType === "ingredient_id";
    const amountCocktail = props?.amountCocktail ? props?.amountCocktail : 20;

    useEffect(() => {
        let time = setTimeout(
            () => dispatch(notificationSliceActions.alertHandlerAdded(false)),
            1000
        );
        return () => {
            clearTimeout(time);
        };
    }, [alert]);
    return (
        <Fragment>
            {alert && <AlertSuccess />}
            <div className=" 2xl:container 2xl:mx-auto">
                <div className=" py-6 lg:px-20 md:px-6 px-4">
                    <div className=" flex justify-between items-center">
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
                    {!error && !dataIsEmpty && amountCocktail !== 20 ? (
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
