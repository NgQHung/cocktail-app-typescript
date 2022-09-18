import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { notificationSliceActions } from "../../store/notification-slice";

const EditAddedCocktail = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [addressImage, setAddressImage] = useState("");
    const id = useAppSelector((state) => state.cocktailSlice.idSelectedCocktail);

    const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        if (!value) return;
        setName(value);
    };
    const typeOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        if (!value) return;

        setType(value);
    };
    const priceOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        if (!value) return;

        setPrice(value);
    };
    const addressImageOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        if (!value) return;

        setAddressImage(value);
    };

    const updateCocktail = async () => {
        try {
            const res = await axios.put(`http://localhost:4000/api/my-cocktail/${id}/update`, {
                // ...cocktailEdit,
                name: name,
                type: type,
                price: price,
                addressImage: addressImage,
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

                // navigate('/my-cocktail')
                setTimeout(() => navigate("/my-cocktail"), 1000);
            }
            // console.log("hello?");
        } catch (error) {
            console.log(error);
        }
    };

    // const [inputEdit, setInputEdit] = useState({
    //     name: cocktailEdit.name,
    //     type: cocktailEdit.type,
    //     price: cocktailEdit.price,
    //     addressImage: cocktailEdit.addressImage,
    // });
    // const [input, setInput] = useState('')
    const onSaveHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({
            // ...cocktailEdit,
            name: name,
            type: type,
            price: price,
            addressImage: addressImage,
        });
        updateCocktail();
        // console.log(inputEdit);
    };

    useEffect(() => {
        const fetchAddedDataEdit = async () => {
            const data = await axios.get(`http://localhost:4000/api/my-cocktail/${id}/edit`);
            // console.log(data);
            dispatch(cocktailSliceAction.addedCocktailEditHandler(data.data));
            setName(data.data.name);
            setType(data.data.type);
            setPrice(data.data.price);
            setAddressImage(data.data.addressImage);
        };
        try {
            fetchAddedDataEdit();
        } catch (error) {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Error",
                    alertContent: "Something went wrong",
                    type: "error",
                })
            );
        }
    }, [location.key]);

    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12 z-50">
                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Let's Create a Cocktail</h1>
                    <form id="form" onSubmit={onSaveHandler}>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                onChange={nameOnChangeHandler}
                                // onBlur={nameOnBlur}
                                name="name"
                                // defaultValue={cocktailEdit.name}
                                value={name}
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
                                name="type"
                                onChange={typeOnChangeHandler}
                                // onBlur={typeOnBlur}
                                value={type}
                                // defaultValue={cocktailEdit.type}
                                placeholder="Enter type "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            {/* <span className="text-sm text-red-600 hidden" id="error">
                        Email address is required
                    </span> */}
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                // type="password"
                                name="price"
                                onChange={priceOnChangeHandler}
                                // onBlur={priceOnBlur}
                                value={price}
                                // defaultValue={cocktailEdit.price}
                                placeholder="Enter price "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            {/* <span className="text-sm text-red-600 hidden" id="error">
                        Password is required
                    </span> */}
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                // type="email"
                                name="addressImage"
                                onChange={addressImageOnChangeHandler}
                                // onBlur={addressImageOnBlur}
                                value={addressImage}
                                // defaultValue={cocktailEdit?.addressImage}
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
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditAddedCocktail;
