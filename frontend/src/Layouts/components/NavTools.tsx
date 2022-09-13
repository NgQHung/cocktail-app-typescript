import { faBasketShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import User from "./User";

const NavTools = () => {
    const cocktailsBasket: any = useSelector<any>((state) => state.cocktailSlice.cocktailsBasket);
    const cocktailsHeart: any = useSelector<any>((state) => state.cocktailSlice.cocktailsHeart);
    console.log(cocktailsHeart);
    const amountCocktailsHeart = cocktailsHeart.length;
    // console.log(cocktailsHeart);
    const amountItems = cocktailsBasket.length;
    return (
        <Fragment>
            <nav className="contents relative">
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
                                className={`dropdown_list_user
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
        </Fragment>
    );
};

export default NavTools;
