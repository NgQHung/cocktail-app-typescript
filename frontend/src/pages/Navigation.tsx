import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { cocktailSliceAction } from "../store/cocktail-slice";

// interface Props {
//     isClicked: boolean;
// }

const Navigation = () => {
    const navigationClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.navigationClicked
    );
    const dispatch = useDispatch();
    const clickedCocktailHandler = () => {
        if (navigationClicked === true) return dispatch(cocktailSliceAction.navigationHandler());
    };
    return (
        <Fragment>
            <div
                className="flex justify-center mt-2 flex-col items-center"
                onClick={clickedCocktailHandler}
            >
                <p>Alcoholic</p>
                <div className="flex text-xl text-gray-400">
                    <NavLink
                        // onClick={clickedCocktailHandler}
                        className="p-4 hover:text-blue-600"
                        to="/alcoholic/alcoholic"
                    >
                        Alcoholic
                    </NavLink>
                    <NavLink className="p-4 hover:text-blue-600" to="/alcoholic/non-alcoholic">
                        Non-Alcoholic
                    </NavLink>
                </div>
                <p>Ingredient</p>
                <div className="flex text-xl text-gray-400">
                    <NavLink className="p-4 hover:text-blue-600" to="/ingredient/gin">
                        Gin
                    </NavLink>
                    <NavLink className="p-4 hover:text-blue-600" to="/ingredient/vodka">
                        Vodka
                    </NavLink>
                </div>
                <p>Glass</p>
                <div className="flex text-xl text-gray-400">
                    <NavLink className="p-4 hover:text-blue-600" to="/glass/cocktail-glass">
                        Cocktail Glass
                    </NavLink>
                    <NavLink className="p-4 hover:text-blue-600" to="/glass/champagne-flute">
                        Champagne Flute
                    </NavLink>
                </div>
                <p>Category</p>
                <div className="flex text-xl text-gray-400">
                    <NavLink className="p-4 hover:text-blue-600" to="/glass/ordinary-drink">
                        Ordinary Drink
                    </NavLink>
                    <NavLink className="p-4 hover:text-blue-600" to="/glass/cocktail">
                        Cocktail
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
