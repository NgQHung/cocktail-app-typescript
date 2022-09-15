import { faBars, faBasketShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import User from "./User";
import { motionNavtoolsLeft } from "../../UI/Animation";
import { useAppSelector } from "../../store/hook";
import { useDispatch } from "react-redux";
import { UISliceActions } from "../../store/ui-slice";

const NavTools = () => {
    const cocktailsBasket: any = useSelector<any>((state) => state.cocktailSlice.cocktailsBasket);
    const cocktailsHeart: any = useSelector<any>((state) => state.cocktailSlice.cocktailsHeart);
    const barsClicked = useAppSelector((state) => state.UISlice.barsClicked);
    const navigate = useNavigate();
    // console.log(barsClicked);
    const dispatch = useDispatch();

    // console.log(cocktailsHeart);
    const amountCocktailsHeart = cocktailsHeart.length;
    // console.log(cocktailsHeart);
    const amountItems = cocktailsBasket.length;

    const navToolsHandler = () => {
        dispatch(UISliceActions.navToolsHandler());
    };

    return (
        <Fragment>
            {/* screen */}
            <nav className="sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-[120px] hidden sm:block">
                <ul className="ml-4 xl:w-48 flex items-center justify-end ">
                    <li className=" dropdown_basket group  ml-2 lg:ml-4  h-[40px] flex justify-center items-center relative z-50">
                        <div
                            id="dropdownUserAvatarButton"
                            data-dropdown-toggle="dropdownAvatar"
                            // onClick={dropDownHandler}
                            className=" text-xl focus:text-gray-500 rounded-full hover:transition-all md:mr-0"
                        >
                            {/* <span className="sr-only">Open user menu</span> */}
                            <div className="h-9 relative text-xl lg:h-10 p-2 text-gray-500 lg:group-hover:border lg:group-hover:border-black">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="hide_part_basket lg:absolute lg:top-[90%] lg:right-[0.5px] bg-white lg:w-[34px] lg:z-50 lg:h-[5px]"></div>
                            <div
                                id="dropdownAvatar"
                                className={`dropdown_list_user absolute
                     lg:absolute  lg:top-[95%] lg:right-0 bg-white lg:border lg:border-black z-10 w-[250px] divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                            >
                                <User />
                            </div>
                        </div>
                    </li>
                    <li className="h-[40px] ml-2 lg:ml-4 relative inline-block">
                        <Link to="/wish-list" className="">
                            <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                                {amountCocktailsHeart}
                            </div>
                            <div
                                // onClick={heartHandler}
                                className="h-9 text-xl lg:h-10 p-2 text-gray-500"
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </Link>
                    </li>
                    <li className="group dropdown_basket ml-2 lg:ml-4 relative inline-block cursor-pointer">
                        <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                            {amountItems}
                        </div>
                        <div className="h-9 relative text-xl lg:h-10 p-2 text-gray-500 lg:group-hover:border lg:group-hover:border-black">
                            <FontAwesomeIcon icon={faBasketShopping} />
                        </div>
                        <div className="hide_part_basket lg:absolute lg:top-[95%] lg:right-[0.5px] bg-white lg:w-[39px] lg:z-10 lg:h-[1px]"></div>
                        <div className="dropdown_list_basket lg:w-[450px] lg:absolute lg:top-[95%] lg:right-0 bg-white lg:border lg:border-black">
                            <ShoppingCart />
                        </div>
                    </li>
                </ul>
            </nav>
            {/* mobile */}
            <motion.div
                initial={{ opacity: 0.1 }}
                animate={{
                    x: barsClicked ? -100 : 10,
                    opacity: barsClicked ? 1 : 1,
                    transition: {
                        duration: 0.5,
                    },
                }}
                className="w-full h-full text-xl z-50 sm:hidden mr-2 "
                onClick={navToolsHandler}
            >
                <FontAwesomeIcon icon={faBars} />
            </motion.div>
            <div className="sm:hidden absolute right-0 top-full w-1/2 h-screen bg-red overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        x: barsClicked ? 0 : 200,
                        opacity: barsClicked ? 1 : 0,
                        transition: {
                            type: "tween",
                            duration: 0.5,
                        },
                    }}
                    className=" w-full h-screen bg-white sm:hidden z-50 "
                >
                    <div className="flex flex-col items-end justify-center  ">
                        {/* <Link to="/profile"> */}
                        <div
                            onClick={() => navigate("/signin")}
                            className="flex items-center justify-between p-4 w-full active:bg-gray-100 transition-colors"
                        >
                            <p className="ml-2">Profile</p>
                            <div className=" text-lg">
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>
                        {/* </Link> */}
                        <div
                            onClick={() => navigate("/wish-list")}
                            className="flex items-center p-4 justify-between w-full active:bg-gray-100 transition-colors"
                        >
                            {/* <Link to="/wish-list"> */}
                            <p className="ml-2">Wish List</p>

                            <div className="text-lg">
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            {/* </Link> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Fragment>
    );
};

export default NavTools;
