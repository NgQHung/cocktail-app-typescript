import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
    const [dropDown, setDropDown] = useState(false);
    console.log(dropDown);

    const dropDownHandler = (e: any) => {
        e.preventDefault();
        setDropDown((prev) => (prev = !prev));
    };
    return (
        <Fragment>
            <div className="">
                <button
                    id="dropdownUserAvatarButton"
                    data-dropdown-toggle="dropdownAvatar"
                    // onClick={dropDownHandler}
                    className="dropdown_wrapper text-xl focus:text-gray-500 rounded-full md:mr-0"
                >
                    {/* <span className="sr-only">Open user menu</span> */}
                    <FontAwesomeIcon icon={faUser} />
                </button>

                <div
                    id="dropdownAvatar"
                    className={`dropdown_list
                     absolute top-[68%] right-44 z-50 w-[250px]  bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                >
                    {/* <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                        <div>Bonnie Green</div>
                        <div className="font-medium truncate">name@flowbite.com</div>
                    </div> */}
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

                    <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200 transition-color"
                        aria-labelledby="dropdownUserAvatarButton"
                    >
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Settings
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Earnings
                            </a>
                        </li>
                    </ul>
                    <div className="py-1">
                        <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default User;
