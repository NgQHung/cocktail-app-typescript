import React, { useState, Fragment } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faUser,
    faHeart,
    faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { searchSliceAction } from "../store/search-slice";
import Search from "./components/Search";
import NavTools from "./components/NavTools";

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const cocktailsBasket: any = useSelector<any>((state) => state.cocktailSlice.cocktailsBasket);
    const total: any = useSelector<any>((state) => state.cocktailSlice.total);

    const totalPrices = cocktailsBasket
        .map((item: any) => item.totalPrice)
        .reduce((prev: number, curr: number) => prev + curr, 0);

    const searchPath = location.pathname === "/search";

    const searchHandler = () => {
        dispatch(searchSliceAction.searchHandler(true));
    };

    return (
        <Fragment>
            <div
                className={`
                ${searchPath ? "hidden" : ""} shadow-xl sticky top-0 z-10 rounded-b-xl h-[90px] `}
            >
                {/* <Navigation /> */}

                <header className=" bg-white w-full h-full relative">
                    <div className="mx-auto px-4 py-8 h-full flex items-center">
                        {/* <!-- logo --> */}
                        <div className="mr-auto md:w-48 flex-shrink-0">
                            <img
                                className="h-8 md:h-10"
                                src="https://i.pinimg.com/originals/b8/6f/67/b86f67625bc4f99d4b3acfd7992b3c09.png"
                                alt=""
                            />
                        </div>

                        {/* <!-- search --> */}
                        <Search />

                        {/* <!-- buttons --> */}
                        <NavTools />

                        {/* <!-- cart count --> */}
                        <div className="ml-4 hidden sm:flex flex-col font-bold">
                            <span className="text-xs text-gray-400">Your Cart</span>
                            <span>$ {total}</span>
                        </div>
                    </div>

                    {/* <hr> */}
                </header>
            </div>
        </Fragment>
    );
};

export default Header;
