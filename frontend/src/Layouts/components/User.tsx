import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";

const User = () => {
    const [dropDown, setDropDown] = useState(false);
    console.log(dropDown);

    const dropDownHandler = (e: any) => {
        e.preventDefault();
        setDropDown((prev) => (prev = !prev));
    };
    return (
        <Fragment>
            <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                // type="button"
                onClick={dropDownHandler}
            >
                <span className="sr-only">Open user menu</span>
                <img
                    className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="user photo"
                />
            </button>

            {/* <!-- Dropdown menu --> */}
            {/* {dropDown && ( */}
            <div
                id="dropdownAvatar"
                className={`${
                    dropDown ? "hidden" : "absolute"
                } z-50 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
            >
                <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div className="font-medium truncate">name@flowbite.com</div>
                </div>
                <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
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
            {/* )} */}
        </Fragment>
    );
};

export default User;
