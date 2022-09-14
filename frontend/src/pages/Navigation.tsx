import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { motion } from "framer-motion";
import {
    motionHeader,
    motionNavigation,
    motionNavigation_content_l,
    motionNavigation_content_r,
} from "../UI/Animation";
import { ButtonHeader } from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    const navigationClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.navigationClicked
    );
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mainPath = location.pathname === "/";
    const navPath = location.pathname === "/navigation";
    // console.log(pathName);

    const navigationHandler = () => {
        if (mainPath) {
            dispatch(cocktailSliceAction.navigationHandler(true));
        }
        if (navPath) {
            dispatch(cocktailSliceAction.navigationHandler(false));
        }
        // if () {
        //     dispatch(cocktailSliceAction.navigationHandler(false));
    };

    const isNavigation = location.pathname === "/navigation";

    const searchClicked: any = useSelector<any>((state) => state.searchSlice.searchClicked);
    const style_search = searchClicked ? "hidden" : "";

    useEffect(() => {
        if (!navigationClicked && isNavigation) {
            navigate("/");
        }
    }, [navigationClicked]);

    return (
        <Fragment>
            {/* <div> */}
            <motion.div
                variants={motionHeader}
                initial="hidden"
                animate="visible"
                transition={motionHeader.transition}
                className="flex justify-between items-center py-4 px-12"
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
                <div className={`text-3xl  ${style_search}`}>
                    <Link to={mainPath ? "/navigation" : "/"}>
                        <ButtonHeader clickHandler={navigationHandler}>Cocktail</ButtonHeader>
                    </Link>
                </div>
                <div className="absolute right-52 text-lg">
                    <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
                        <Link
                            to="/signin"
                            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Sign in
                        </Link>
                        <Link
                            to="/signup"
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="w-12 flex items-center justify-center">
                    <Link to="search">
                        <div className=" cursor-point hover:text-green-500 text-xl">
                            <FontAwesomeIcon className="w-12" icon={faMagnifyingGlass} />
                        </div>
                    </Link>
                </div>
            </motion.div>
            {!searchClicked && navigationClicked ? (
                <div className="">
                    <motion.div
                        variants={motionNavigation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`flex justify-around z-99 bg_nav mt-2 flex-row h-96`}
                    ></motion.div>

                    <div className=" absolute left-0 right-0 top-24 mx-auto text-center">
                        <motion.p
                            variants={motionNavigation_content_l}
                            initial="hidden"
                            animate="visible"
                            transition={motionNavigation_content_l.transition}
                            className="py-4"
                        >
                            Alcoholic
                        </motion.p>
                        <motion.div
                            variants={motionNavigation_content_r}
                            initial="hidden"
                            animate="visible"
                            transition={motionNavigation_content_r.transition}
                            className=" text-lg text-gray-400"
                        >
                            <NavLink
                                onClick={() =>
                                    dispatch(cocktailSliceAction.navigationHandler(false))
                                }
                                className="p-4 hover:text-blue-600"
                                to="/alcoholic/alcoholic"
                            >
                                Alcoholic
                            </NavLink>
                            <NavLink
                                onClick={() =>
                                    dispatch(cocktailSliceAction.navigationHandler(false))
                                }
                                className="p-4 hover:text-blue-600"
                                to="/alcoholic/non-alcoholic"
                            >
                                Non-Alcoholic
                            </NavLink>
                        </motion.div>
                        <motion.p
                            variants={motionNavigation_content_l}
                            initial="hidden"
                            animate="visible"
                            transition={motionNavigation_content_l.transition}
                            className="py-4"
                        >
                            Ingredient
                        </motion.p>
                        <motion.div
                            variants={motionNavigation_content_r}
                            initial="hidden"
                            animate="visible"
                            transition={motionNavigation_content_r.transition}
                            className=" text-lg text-gray-400"
                        >
                            <NavLink
                                onClick={() =>
                                    dispatch(cocktailSliceAction.navigationHandler(false))
                                }
                                className="p-4 hover:text-blue-600"
                                to="/ingredient/gin"
                            >
                                Gin
                            </NavLink>
                            <NavLink
                                onClick={() =>
                                    dispatch(cocktailSliceAction.navigationHandler(false))
                                }
                                className="p-4 hover:text-blue-600"
                                to="/ingredient/vodka"
                            >
                                Vodka
                            </NavLink>
                        </motion.div>
                        <motion.p
                            variants={motionNavigation_content_l}
                            initial="hidden"
                            animate="visible"
                            transition={motionNavigation_content_l.transition}
                            className="py-4"
                        >
                            Glass
                        </motion.p>
                        <motion.div
                            variants={motionNavigation_content_r}
                            initial="hidden"
                            animate="visible"
                            transition={motionNavigation_content_r.transition}
                            className=" text-lg text-gray-400"
                        >
                            <NavLink
                                onClick={() =>
                                    dispatch(cocktailSliceAction.navigationHandler(false))
                                }
                                className="p-4 hover:text-blue-600"
                                to="/glass/cocktail-glass"
                            >
                                Cocktail Glass
                            </NavLink>
                            <NavLink
                                onClick={() =>
                                    dispatch(cocktailSliceAction.navigationHandler(false))
                                }
                                className="p-4 hover:text-blue-600"
                                to="/glass/champagne-flute"
                            >
                                Champagne Flute
                            </NavLink>
                        </motion.div>
                        <motion.p
                            variants={motionNavigation_content_l}
                            initial="hidden"
                            animate="visible"
                            transition={motionNavigation_content_l.transition}
                            className="py-4"
                        >
                            Category
                        </motion.p>
                        <motion.div
                            variants={motionNavigation_content_r}
                            initial="hidden"
                            animate="visible"
                            transition={motionNavigation_content_r.transition}
                            className=" text-xl text-gray-400"
                        >
                            <NavLink
                                onClick={() =>
                                    dispatch(cocktailSliceAction.navigationHandler(false))
                                }
                                className="p-4 hover:text-blue-600"
                                to="/glass/ordinary-drink"
                            >
                                Ordinary Drink
                            </NavLink>
                            <NavLink
                                onClick={() =>
                                    dispatch(cocktailSliceAction.navigationHandler(false))
                                }
                                className="p-4 hover:text-blue-600"
                                to="/glass/cocktail"
                            >
                                Cocktail
                            </NavLink>
                        </motion.div>
                    </div>
                    {/* </motion.div> */}
                </div>
            ) : null}
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
