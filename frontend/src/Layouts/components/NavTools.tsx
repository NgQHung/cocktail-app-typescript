import { faBars, faBasketShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    console.log(barsClicked);
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
            <nav className=" relative hidden sm:block">
                <ul className="ml-4 xl:w-48 flex items-center justify-end">
                    <li
                        className=" dropdown_basket group  ml-2 lg:ml-4  h-[40px] flex justify-center items-center relative
                         before:content-[''] before:invisible before:lg:visible before:h-[40px] before:absolute before:w-[51px] before:top-[63px] before:right-[192px] before:bg-transparent

                    "
                    >
                        {/* <a className="" href=""> */}
                        {/* <div className="h-9 lg:h-10 p-2 text-gray-500"> */}
                        {/* <FontAwesomeIcon icon={faUser} /> */}
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
                        {/* </div> */}
                        {/* </a> */}
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
                // initial={{ x: 0 }}
                // animate={{ x: "-10vw" }}
                className="p-4 text-2xl sm:hidden"
                onClick={navToolsHandler}
            >
                <FontAwesomeIcon icon={faBars} />
            </motion.div>

            <div
                className={
                    "absolute right-0 top-0 w-1/2 h-screen bg-white sm:hidden " +
                    (!barsClicked ? "hidden" : "")
                }
            >
                <motion.nav>
                    <motion.div
                        variants={motionNavtoolsLeft}
                        initial="hidden"
                        animate={barsClicked ? "turnLeft" : ""}
                        onClick={navToolsHandler}
                        className=" "
                    >
                        <div className="p-4 text-2xl">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="flex flex-col items-end justify-center pt-4">
                            <div className="flex items-center justify-between w-full p-4 mt-4 active:bg-gray-100 transition-colors">
                                <p className="ml-2">Profile</p>
                                <div className="mr-2">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                            <div className="flex items-center p-4 justify-between w-full active:bg-gray-100 transition-colors">
                                <p className="ml-2">Wish List</p>

                                <div className="mr-2">
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                            <div className="flex items-center p-4 justify-between w-full active:bg-gray-100 transition-colors">
                                <p className="ml-2">Shopping Cart</p>

                                <div className="mr-2">
                                    <FontAwesomeIcon icon={faBasketShopping} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.nav>
            </div>
        </Fragment>
    );
};

export default NavTools;
