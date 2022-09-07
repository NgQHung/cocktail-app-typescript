import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { motion } from "framer-motion";
import {
    motionHeader,
    motionNavigation_content_l,
    motionNavigation_content_r,
} from "../UI/Animation";
import { ButtonHeader } from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// interface Props {
//     isClicked: boolean;
// }

const Navigation = () => {
    const navigationClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.navigationClicked
    );
    // console.log(navigationClicked);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const dispatch = useDispatch();
    const clickedCocktailHandler = () => {
        if (navigationClicked === true)
            return dispatch(cocktailSliceAction.navigationHandler(false));
    };

    const mainPath = location.pathname === "/";

    const searchClicked: any = useSelector<any>((state) => state.searchSlice.searchClicked);
    const style_search = searchClicked ? "hidden" : "";

    useEffect(() => {
        if (!navigationClicked) {
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
                                dispatch(cocktailSliceAction.navigationHandler(!navigationClicked))
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
            <motion.div
                // variants={motionNavigation}
                // initial="hidden"
                // animate="visible"
                // exit="exit"
                className={`${
                    mainPath || !navigationClicked ? "hidden" : ""
                } flex justify-around mt-2 flex-row`}
                onClick={clickedCocktailHandler}
            >
                {/* <div className="w-12"></div> */}
                <div className="flex flex-col justify-center items-center">
                    <motion.p
                        variants={motionNavigation_content_l}
                        initial="hidden"
                        animate="visible"
                        transition={motionNavigation_content_l.transition}
                    >
                        Alcoholic
                    </motion.p>
                    <motion.div
                        variants={motionNavigation_content_r}
                        initial="hidden"
                        animate="visible"
                        transition={motionNavigation_content_r.transition}
                        className="flex text-lg text-gray-400"
                    >
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
                    </motion.div>
                    <motion.p
                        variants={motionNavigation_content_l}
                        initial="hidden"
                        animate="visible"
                        transition={motionNavigation_content_l.transition}
                    >
                        Ingredient
                    </motion.p>
                    <motion.div
                        variants={motionNavigation_content_r}
                        initial="hidden"
                        animate="visible"
                        transition={motionNavigation_content_r.transition}
                        className="flex text-lg text-gray-400"
                    >
                        <NavLink className="p-4 hover:text-blue-600" to="/ingredient/gin">
                            Gin
                        </NavLink>
                        <NavLink className="p-4 hover:text-blue-600" to="/ingredient/vodka">
                            Vodka
                        </NavLink>
                    </motion.div>
                    <motion.p
                        variants={motionNavigation_content_l}
                        initial="hidden"
                        animate="visible"
                        transition={motionNavigation_content_l.transition}
                    >
                        Glass
                    </motion.p>
                    <motion.div
                        variants={motionNavigation_content_r}
                        initial="hidden"
                        animate="visible"
                        transition={motionNavigation_content_r.transition}
                        className="flex text-lg text-gray-400"
                    >
                        <NavLink className="p-4 hover:text-blue-600" to="/glass/cocktail-glass">
                            Cocktail Glass
                        </NavLink>
                        <NavLink className="p-4 hover:text-blue-600" to="/glass/champagne-flute">
                            Champagne Flute
                        </NavLink>
                    </motion.div>
                    <motion.p
                        variants={motionNavigation_content_l}
                        initial="hidden"
                        animate="visible"
                        transition={motionNavigation_content_l.transition}
                    >
                        Category
                    </motion.p>
                    <motion.div
                        variants={motionNavigation_content_r}
                        initial="hidden"
                        animate="visible"
                        transition={motionNavigation_content_r.transition}
                        className="flex text-xl text-gray-400"
                    >
                        <NavLink className="p-4 hover:text-blue-600" to="/glass/ordinary-drink">
                            Ordinary Drink
                        </NavLink>
                        <NavLink className="p-4 hover:text-blue-600" to="/glass/cocktail">
                            Cocktail
                        </NavLink>
                    </motion.div>
                </div>
                {/* <div className="w-12"></div> */}
            </motion.div>
            {/* </div> */}
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
