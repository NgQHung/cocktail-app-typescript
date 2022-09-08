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
                relative border-b shadow-xl sticky top-0 z-50 rounded-b-xl `}
            >
                <Navigation />
            </div>
        </Fragment>
    );
};

export default Header;
