import React, { useState } from "react";
import { ButtonHeader } from "../UI/Button";
import Navigation from "../pages/Navigation";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Search from "../components/Search/Search";
import { searchSliceAction } from "../store/search-slice";

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
        dispatch(searchSliceAction.searchHandler());
    };

    return (
        <div
            className={`bg-header
            ${searchPath ? "hidden" : ""}
            h-full w-full border-b shadow-xl sticky top-0 z-99 bg-white p-4 `}
        >
            <div className="flex justify-around">
                <div className={`cursor-pointer ${style_search}`}>
                    <Link onClick={navigationClicked} to="/">
                        <img className="w-16" src="logo.png" alt="logo" />
                    </Link>
                </div>
                <div className={` ${style_search}`}>
                    <Link to="/navigation">
                        <ButtonHeader
                            clickHandler={() => dispatch(cocktailSliceAction.navigationHandler())}
                        >
                            Cocktail
                        </ButtonHeader>
                    </Link>
                </div>
                <div className="w-16 flex items-center justify-center">
                    <Link to="/search">
                        <div
                            className=" cursor-point hover:bg-gray-100 hover:text-green-500"
                            onClick={searchHandler}
                        >
                            {!searchClicked && <FontAwesomeIcon icon={faMagnifyingGlass} />}
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                {navigationClicked && !searchClicked ? <Navigation /> : null}
                {!navigationClicked && isNavigation ? <Navigate to="/" /> : null}
            </div>
        </div>
    );
};

export default Header;
