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
// interface MatchParams {
//     id: string
// }

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigationClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.navigationClicked
    );
    const searchClicked: any = useSelector<any>((state) => state.searchSlice.searchClicked);
    const isNavigation = location.pathname === "/navigation";

    const style_search = searchClicked ? "hidden" : "";
    return (
        <div className=" flex justify-between align-center flex-col w-full border-b-4 shadow-md sticky top-0 z-40 bg-white p-4 ">
            <div className="flex justify-between items-center justify-center">
                <div className={`cursor-pointer ${style_search}`}>
                    <Link onClick={navigationClicked} to="/">
                        logo
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
                <div className="flex justify-center cursor-pointer">
                    <Search />
                </div>
            </div>
            {navigationClicked && <Navigation />}
            {!navigationClicked && isNavigation ? <Navigate to="/" /> : null}
        </div>
    );
};

export default Header;
