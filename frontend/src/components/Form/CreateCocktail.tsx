import axios from "axios";
import React from "react";
import Use_Form from "../../hooks/use_form";
import { formSliceActions } from "../../store/form-slice";
import { useAppDispatch } from "../../store/hook";
import { notificationSliceActions } from "../../store/notification-slice";

const inputIsValid = (value: string) => value.trim() !== "";

const CreateCocktail = () => {
    const {
        onChangeHandler: nameOnChange,
        input: nameInput,
        inputBlurHandler: nameOnBlur,
        reset: nameOnReset,
        // isTouched: nameIsTouched,
        // hasError: nameHasError,
        // inputIsValid: nameIsValid,
    } = Use_Form(inputIsValid);
    const {
        onChangeHandler: typeOnChange,
        input: typeInput,
        inputBlurHandler: typeOnBlur,
        reset: typeOnReset,
        // isTouched: typeIsTouched,
        // hasError: typeHasError,
        // inputIsValid: typeIsValid,
    } = Use_Form(inputIsValid);
    const {
        onChangeHandler: priceOnChange,
        input: priceInput,
        inputBlurHandler: priceOnBlur,
        reset: priceOnReset,
        // isTouched: priceIsTouched,
        // hasError: priceHasError,
        // inputIsValid: priceIsValid,
    } = Use_Form(inputIsValid);
    const {
        onChangeHandler: addressImageOnChange,
        input: addressImageInput,
        inputBlurHandler: addressImageOnBlur,
        reset: addressImageOnReset,
        // isTouched: addressImageIsTouched,
        // hasError: addressImageHasError,
        // inputIsValid: addressImageIsValid,
    } = Use_Form(inputIsValid);
    // const {
    //     onChangeHandler: imageOnChange,
    //     input: imageInput,
    //     inputBlurHandler: imageOnBlur,
    //     reset: imageOnReset,
    //     isTouched: imageIsTouched,
    //     hasError: imageHasError,
    //     inputIsValid: imageIsValid,
    // } = Use_Form(inputIsValid);

    const dispatch = useAppDispatch();

    const createCocktail = async () => {
        try {
            const res = await axios.post("http://localhost:4000/api/my-cocktail/create-cocktail", {
                name: nameInput,
                type: typeInput,
                price: priceInput,
                addressImageInput: addressImageInput,
            });
            // console.log(res.data.data);
            if (res.data.data === null) {
                dispatch(
                    notificationSliceActions.alertHandler({
                        title: "Error!",
                        description: res.data.error.msg,
                        type: "error",
                    })
                );
            } else {
                dispatch(
                    notificationSliceActions.alertHandler({
                        title: "Success!",
                        description: res.data.msg,
                        type: "success",
                    })
                );
            }
            // console.log("hello?");
        } catch (error) {
            console.log(error);
        }
    };

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(
            formSliceActions.createCocktail({
                name: nameInput,
                type: typeInput,
                price: priceInput,
                addressImage: addressImageInput,
            })
        );
        // console.log(nameInput, typeInput, priceInput, addressImageInput);
        typeOnReset();
        nameOnReset();
        priceOnReset();
        addressImageOnReset();
        createCocktail();
        // dispatch(createCocktail())
        // createCocktail({
        //     name: nameInput,
        //     type: typeInput,
        //     price: priceInput,
        //     addressImageInput: addressImageInput,
        // });
    };
    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12 z-50">
                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Let's Create a Cocktail</h1>
                    <form id="form" onSubmit={submitHandler}>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                onChange={nameOnChange}
                                onBlur={nameOnBlur}
                                name="name"
                                value={nameInput}
                                placeholder="Enter name"
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            {/* <span className="text-sm text-red-600 hidden" id="error">
                                Name is required
                            </span> */}
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                // type="email"
                                // name="email"
                                onChange={typeOnChange}
                                onBlur={typeOnBlur}
                                value={typeInput}
                                placeholder="Enter type "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            {/* <span className="text-sm text-red-600 hidden" id="error">
                                Email address is required
                            </span> */}
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                onChange={priceOnChange}
                                onBlur={priceOnBlur}
                                value={priceInput}
                                placeholder="Enter price "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            {/* <span className="text-sm text-red-600 hidden" id="error">
                                Password is required
                            </span> */}
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                onChange={addressImageOnChange}
                                onBlur={addressImageOnBlur}
                                value={addressImageInput}
                                placeholder="Enter address image "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                        </div>
                        <div className="relative z-0 mb-5 w-full text-center">OR</div>

                        <div className="relative z-0 w-full mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                htmlFor="file_input"
                            >
                                Upload file
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help"
                                id="file_input"
                                type="file"
                            />
                            <p
                                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                                id="file_input_help"
                            >
                                SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
                        </div>

                        <div className="relative z-0 w-full mb-5"></div>

                        <button
                            id="button"
                            className="w-full px-6 py-3 mt-3 text-lg text-white cursor-pointer transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateCocktail;
