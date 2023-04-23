// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authSliceActions } from "../../store/auth-slice";
import { notificationSliceActions } from "../../store/notification-slice";

const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = localStorage.getItem("User");
    const email = user ? JSON.parse(localStorage.getItem("User")!) : "";

    const signoutHandler = () => {
        dispatch(authSliceActions.logout());
        navigate("/");
        // window.location.reload();
        dispatch(
            notificationSliceActions.alertHandler({
                title: "Oops!",
                description: "You logged out in successfully with",
                type: "success",
            })
        );
    };

    const navigateHandlerCocktail = () => {
        if (user !== null) {
            return navigate("/create-cocktail");
        } else {
            return dispatch(
                notificationSliceActions.alertHandler({
                    title: "Oops!",
                    description: "You must be logged in first!!!",
                    type: "error",
                })
            );
        }
    };
    const navigateHandlerIngredient = () => {
        if (user !== null) {
            return navigate("/create-ingredient");
        } else {
            return dispatch(
                notificationSliceActions.alertHandler({
                    title: "Oops!",
                    description: "You must be logged in first!!!",
                    type: "error",
                })
            );
        }
    };

    // const navigateHandlerAddedIngredient = () => {
    //     if (user) {
    //         return navigate("/added-ingredient");
    //     } else {
    //         return dispatch(
    //             notificationSliceActions.alertHandler({
    //                 title: "Oops!",
    //                 description: "You must be logged in first!!!",
    //                 type: "error",
    //             })
    //         );
    //     }
    // };

    const navigateHandlerAddedCocktail = () => {
        if (user) {
            return navigate("/my-cocktail");
        } else {
            return dispatch(
                notificationSliceActions.alertHandler({
                    title: "Oops!",
                    description: "You must be logged in first!!!",
                    type: "error",
                })
            );
        }
    };

    return (
        <Fragment>
            <div className="text-center">
                {user ? (
                    <div className="py-2 px-4 text-sm text-gray-900 dark:text-white">
                        <div>Bonnie Green</div>
                        <div className="font-medium truncate">{email?.user?.email}</div>
                    </div>
                ) : (
                    // <div className="py-2">{email}</div>
                    <div className="text-center">
                        <div className="py-2">You are not registered yet</div>
                        <div className="text-white h-12 flex justify-center items-center">
                            <Link
                                to="/signin"
                                // className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                className="bg-black px-16 py-1"
                            >
                                Log in
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200 transition-color"
                aria-labelledby="dropdownUserAvatarButton"
            >
                <li
                    onClick={navigateHandlerCocktail}
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                    Create a Cocktail
                </li>
                <li
                    onClick={navigateHandlerIngredient}
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                    Create a Ingredient
                </li>
                <li
                    onClick={navigateHandlerAddedCocktail}
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                    My Cocktail
                </li>
            </ul>
            {user && (
                <div className="py-1">
                    <div
                        onClick={signoutHandler}
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                        Sign out
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default User;
