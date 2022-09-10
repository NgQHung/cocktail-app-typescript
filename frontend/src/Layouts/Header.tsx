import React, { useState, Fragment } from "react";
import { ButtonHeader } from "../UI/Button";
import Navigation from "../pages/Navigation";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faUser,
    faHeart,
    faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { searchSliceAction } from "../store/search-slice";
import { motion } from "framer-motion";
import { motionHeader, motionNavigation } from "../UI/Animation";
import Search from "./components/Search";
import NavTools from "./components/NavTools";

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigationClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.navigationClicked
    );
    // console.log(location);
    const searchClicked: any = useSelector<any>((state) => state.searchSlice.searchClicked);
    const isNavigation = location.pathname === "/navigation";

    const style_search = searchClicked ? "hidden" : "";

    const searchPath = location.pathname === "/search";

    const searchHandler = () => {
        dispatch(searchSliceAction.searchHandler(true));
    };

    return (
        <Fragment>
            <div
                className={`bg-header
                ${searchPath ? "hidden" : ""}
                border-b shadow-xl sticky top-0 z-40 rounded-b-xl `}
            >
                {/* <Navigation /> */}

                <header className="bg-white h-[116px] w-full relative">
                    <div className=" mx-auto px-4 py-8 flex items-center">
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
                            <span>$2,650,59</span>
                        </div>
                    </div>

                    {/* <hr> */}
                </header>
            </div>
        </Fragment>
    );
};

export default Header;
