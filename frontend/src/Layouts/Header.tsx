import React, { useState } from "react";
import { ButtonHeader } from "../UI/Button";
import Navigation from "../pages/Navigation";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { useSelector } from "react-redux";

// interface MatchParams {
//     id: string
// }

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigationClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.navigationClicked
    );
    const isNavigation = location.pathname === "/navigation";

    return (
        <div className=" flex flex-col w-full border-b-4 shadow-md sticky top-0 z-40 bg-white p-4 ">
            <Link to="/navigation">
                <ButtonHeader
                    clickHandler={() => dispatch(cocktailSliceAction.navigationHandler())}
                >
                    Cocktail
                </ButtonHeader>
            </Link>
            {navigationClicked && <Navigation />}
            {!navigationClicked && isNavigation ? <Navigate to="/" /> : null}
        </div>
    );
};

export default Header;
