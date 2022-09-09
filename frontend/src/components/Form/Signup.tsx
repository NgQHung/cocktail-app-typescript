import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import Modal from "../../UI/Modal";

const Signup = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isSignup = location.pathname === "/signup";
    const navigate = useNavigate();

    const closeSignupHandler = () => {
        navigate("/");
    };

    useEffect(() => {
        if (isSignup) {
            dispatch(cocktailSliceAction.navigationHandler(false));
        }
    }, [isSignup]);

    return (
        <Modal>
            {/* <body className="font-mono bg-gray-400"> */}
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-4">
                    <div className="w-full xl:w-full lg:w-full flex">
                        <div className="w-full lg:w-full bg-white p-5 rounded-lg">
                            <div
                                className="absolute right-12 hover:text-red-500 cursor-pointer text-xl"
                                onClick={closeSignupHandler}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="firstName"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="lastName"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500s rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            placeholder="******************"
                                        />
                                        {/* <p className="text-xs italic text-red-500">
                                            Please choose a password.
                                        </p> */}
                                    </div>
                                    <div className="md:ml-2">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="c_password"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* </body> */}
        </Modal>
    );
};

export default Signup;
