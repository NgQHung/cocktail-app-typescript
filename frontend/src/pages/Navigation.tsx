import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { motion } from "framer-motion";
import { motionNavigation_content_l, motionNavigation_content_r } from "../UI/Animation";
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
        // dispatch(cocktailSliceAction.navigationHandler());
    };
    return (
        <Fragment>
            <motion.div
                // variants={motionNavigation}
                // initial="hidden"
                // animate="visible"
                // exit="exit"
                className=" flex justify-around mt-2 flex-row "
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
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
