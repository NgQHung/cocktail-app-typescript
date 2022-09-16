import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authSliceActions } from "../../store/auth-slice";
import { notificationSliceActions } from "../../store/notification-slice";

const User = () => {
    // const [dropDown, setDropDown] = useState(false);

    // const dropDownHandler = (e: any) => {
    //     e.preventDefault();
    //     setDropDown((prev) => (prev = !prev));
    // };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let user: any;
    let email;
    React.useEffect(() => {
        // let user
        try {
            user = localStorage.getItem("User") || [];
            email = JSON.parse(user)?.user?.email;
        } catch (error) {
            console.log(error);
        }
    }, []);

    // console.log(user);
    // console.log(emailLocal.user.email);
    // const email: any = useSelector<LinkLinkny>((state) => state.authSlice.email);

    const signoutHandler = () => {
        dispatch(authSliceActions.logout());
        dispatch(
            notificationSliceActions.alertHandler({
                title: "Oops!",
                description: "You logged out in successfully with",
                type: "success",
            })
        );
        navigate("/");
        window.location.reload();
    };

    return (
        <Fragment>
            <div className="text-center">
                {user ? (
                    <div className="py-2 px-4 text-sm text-gray-900 dark:text-white">
                        <div>Bonnie Green</div>
                        <div className="font-medium truncate">{email}</div>
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
                <li>
                    <Link
                        to=""
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to=""
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Settings
                    </Link>
                </li>
                <li>
                    <Link
                        to=""
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        Earnings
                    </Link>
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
