import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Use_Form from "../../hooks/use_form";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { formSliceActions } from "../../store/form-slice";
import Modal from "../../UI/Modal";

const inputIsValid = (value: string) => value.trim() !== "";
const emailInputIsValid = (value: string) => value.includes("@") && value.includes(".");
const iconValid = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
    </svg>
);
// const confirmPasswordIsValid = ()

const Signup = () => {
    // useForm for input form
    const {
        input: firstNameInput,
        hasError: firstNameHasError,
        inputIsValid: firstNameIsValid,
        reset: firstNameReset,
        onChangeHandler: firstNameChange,
        inputBlurHandler: firstNameOnBlur,
    } = Use_Form(inputIsValid);

    const {
        input: lastNameInput,
        hasError: lastNameHasError,
        inputIsValid: lastNameIsValid,
        reset: lastNameReset,
        onChangeHandler: lastNameChange,
        inputBlurHandler: lastNameOnBlur,
    } = Use_Form(inputIsValid);

    const {
        input: emailInput,
        hasError: emailHasError,
        inputIsValid: emailIsValid,
        reset: emailReset,
        onChangeHandler: emailChange,
        inputBlurHandler: emailOnBlur,
    } = Use_Form(emailInputIsValid);

    const {
        input: passwordInput,
        hasError: passwordHasError,
        inputIsValid: passwordIsValid,
        reset: passwordReset,
        onChangeHandler: passwordChange,
        inputBlurHandler: passwordOnBlur,
    } = Use_Form(inputIsValid);

    const {
        input: confirmPassInput,
        hasError: confirmPassHasError,
        inputIsValid: confirmPassIsValid,
        reset: confirmPassReset,
        onChangeHandler: confirmPassChange,
        inputBlurHandler: confirmPassOnBlur,
        isTouched: confirmPassIsTouched,
    } = Use_Form(inputIsValid);

    const location = useLocation();
    const dispatch = useDispatch();
    const isSignup = location.pathname === "/signup";
    const navigate = useNavigate();

    const confirmPassIsInvalid = passwordInput !== confirmPassInput;
    const confirmPasswordHasError = confirmPassIsInvalid && confirmPassIsTouched;

    // const initialValue = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     password: "",
    //     confirmPass: "",
    // };
    // const [inputObj, setInputObj] = useState({})

    // close form
    const closeSignupHandler = () => {
        navigate("/");
    };

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setInputObj()
        // console.log()
        dispatch(
            formSliceActions.formHandler({
                firstName: firstNameInput,
                lastName: lastNameInput,
                email: emailInput,
                password: passwordInput,
            })
        );
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
                            <form
                                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                                onSubmit={onSubmitHandler}
                            >
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="firstName"
                                        >
                                            First Name
                                        </label>
                                        <div className="flex">
                                            <input
                                                className={`${
                                                    firstNameHasError ? "border-red-500" : ""
                                                } w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                id="firstName"
                                                type="text"
                                                placeholder="First Name"
                                                name="firstName"
                                                onChange={firstNameChange}
                                                onBlur={firstNameOnBlur}
                                            />
                                            {firstNameIsValid && iconValid}
                                        </div>

                                        {firstNameHasError && (
                                            <p className="text-xs italic text-red-500">
                                                Please enter a valid name.
                                            </p>
                                        )}
                                    </div>
                                    <div className="md:ml-2">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="lastName"
                                        >
                                            Last Name
                                        </label>
                                        <div className="flex">
                                            <input
                                                className={`${
                                                    lastNameHasError ? "border-red-500" : ""
                                                } w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                id="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                                name="lastName"
                                                onChange={lastNameChange}
                                                onBlur={lastNameOnBlur}
                                            />
                                            {lastNameIsValid && iconValid}
                                        </div>

                                        {lastNameHasError && (
                                            <p className="text-xs italic text-red-500">
                                                Please enter a valid name.
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <div>
                                        <input
                                            className={`${
                                                emailHasError ? "border-red-500" : ""
                                            }w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            onChange={emailChange}
                                            onBlur={emailOnBlur}
                                        />
                                        {emailIsValid && iconValid}
                                    </div>
                                    {emailHasError && (
                                        <p className="text-xs italic text-red-500">
                                            Please enter a valid email.
                                        </p>
                                    )}
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <div>
                                            <input
                                                className={`${
                                                    passwordHasError ? "border-red-500" : ""
                                                } w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500s rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                id="password"
                                                placeholder="******************"
                                                name="password"
                                                onChange={passwordChange}
                                                onBlur={passwordOnBlur}
                                            />
                                            {passwordIsValid && iconValid}
                                        </div>
                                        {passwordHasError && (
                                            <p className="text-xs italic text-red-500">
                                                Please enter a valid password.
                                            </p>
                                        )}
                                    </div>
                                    <div className="md:ml-2">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="c_password"
                                        >
                                            Confirm Password
                                        </label>
                                        <div>
                                            <input
                                                className={`${
                                                    confirmPassHasError ? "border-red-500" : ""
                                                } w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                id="c_password"
                                                placeholder="******************"
                                                name="confirmPass"
                                                onChange={confirmPassChange}
                                                onBlur={confirmPassOnBlur}
                                            />
                                            {confirmPassIsValid && !confirmPasswordHasError
                                                ? iconValid
                                                : null}
                                        </div>
                                        {confirmPassHasError ? (
                                            <p className="text-xs italic text-red-500">
                                                Please enter a valid password.
                                            </p>
                                        ) : confirmPasswordHasError ? (
                                            <p className="text-xs italic text-red-500">
                                                Password and confirm password does not match
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        // onClick={submitHandler}
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        // type="button"
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
