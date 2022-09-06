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
            className={`${
                searchPath ? "hidden" : ""
            } flex justify-between align-center flex-col w-full border-b-4 shadow-md sticky top-0 z-40 bg-white p-4 `}
        >
            <div className="flex w-full justify-between items-center justify-center">
                <div className={`cursor-pointer ${style_search}`}>
                    <Link onClick={navigationClicked} to="/">
                        logo
                    </Link>
                </div>
                <div className={`${style_search}`}>
                    <Link to="/navigation">
                        <ButtonHeader
                            clickHandler={() => dispatch(cocktailSliceAction.navigationHandler())}
                        >
                            Cocktail
                        </ButtonHeader>
                    </Link>
                </div>
                <div className="">
                    <Link to="/search">
                        <div
                            className="cursor-point hover:bg-gray-100 pl-2 pr-2 hover:text-green-500"
                            onClick={searchHandler}
                        >
                            {!searchClicked && <FontAwesomeIcon icon={faMagnifyingGlass} />}
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                {/* {searchClicked && <Search />} */}
                {navigationClicked && !searchClicked ? <Navigation /> : null}
                {!navigationClicked && isNavigation ? <Navigate to="/" /> : null}
            </div>
        </div>
    );
};

export default Header;
