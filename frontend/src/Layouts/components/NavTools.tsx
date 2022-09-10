import { faBasketShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import User from "./User";

const NavTools = () => {
    return (
        <Fragment>
            <nav className="contents relative">
                <ul className="ml-4 xl:w-48 flex items-center justify-end">
                    <li
                        className=" dropdown ml-2 lg:ml-4  h-[40px] flex justify-center items-center
                         before:content-[''] before:invisible before:lg:visible before:h-[40px] before:absolute before:w-[51px] before:top-[63px] before:right-[192px] before:bg-transparent

                    "
                    >
                        {/* <a className="" href=""> */}
                        {/* <div className="h-9 lg:h-10 p-2 text-gray-500"> */}
                        {/* <FontAwesomeIcon icon={faUser} /> */}
                        <User />
                        {/* </div> */}
                        {/* </a> */}
                    </li>
                    <li className="h-[40px] ml-2 lg:ml-4 relative inline-block">
                        <a className="" href="">
                            <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                                3
                            </div>
                            <div className="h-9 text-xl lg:h-10 p-2 text-gray-500">
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </a>
                    </li>
                    <li className="ml-2 lg:ml-4 relative inline-block">
                        <a className="" href="">
                            <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                                12
                            </div>
                            <div className="h-9 text-xl lg:h-10 p-2 text-gray-500">
                                <FontAwesomeIcon icon={faBasketShopping} />
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default NavTools;