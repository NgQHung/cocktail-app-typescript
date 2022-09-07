import React, { useState, Fragment } from "react";
import { ButtonHeader } from "../UI/Button";
import Navigation from "../pages/Navigation";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchSliceAction } from "../store/search-slice";
import { motion } from "framer-motion";
import { motionHeader, motionNavigation } from "../UI/Animation";

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
                 border-b shadow-xl sticky top-0 z-99 p-4 rounded-b-xl `}
            >
                <motion.div
                    variants={motionHeader}
                    initial="hidden"
                    animate="visible"
                    transition={motionHeader.transition}
                    className="flex justify-around items-center"
                >
                    <div className={`cursor-pointer ${style_search}`}>
                        <Link onClick={navigationClicked} to="/">
                            <img
                                className="w-12"
                                src="https://i.pinimg.com/originals/b8/6f/67/b86f67625bc4f99d4b3acfd7992b3c09.png"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className={` ${style_search}`}>
                        <Link to="/navigation">
                            <ButtonHeader
                                clickHandler={() =>
                                    dispatch(cocktailSliceAction.navigationHandler())
                                }
                            >
                                Cocktail
                            </ButtonHeader>
                        </Link>
                    </div>
                    <div className="w-12 flex items-center justify-center">
                        <Link to="search">
                            <div className=" cursor-point hover:text-green-500 text-xl">
                                <FontAwesomeIcon className="w-12" icon={faMagnifyingGlass} />
                            </div>
                        </Link>
                    </div>
                </motion.div>
                {navigationClicked && !searchClicked ? <Navigation /> : null}
                {!navigationClicked && isNavigation ? <Navigate to="/" /> : null}
            </div>
        </Fragment>
    );
};

export default Header;
