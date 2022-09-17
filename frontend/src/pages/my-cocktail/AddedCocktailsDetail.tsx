import axios from "axios";
import { compareSync } from "bcrypt";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confirmation from "../../components/Confirmation";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { UISliceActions } from "../../store/ui-slice";

interface AddedCocktailDetailTypes {
    _id: string;
    name: string;
    type: string;
    price: number;
    addressImage: string;
    __v?: 0;
}

function AddedCocktailsDetail() {
    // const [deleteClicked, setDeleteClicked] = useState(false);

    const deleteClicked = useAppSelector((state) => state.UISlice.deleteClicked);
    const addedCocktailDetail = useAppSelector((state) => state.cocktailSlice.addedCocktailDetail);
    const detail = addedCocktailDetail?.cocktail;
    // console.log(addedCocktailDetail);
    const id = detail?._id;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const fetchAddedDataEdit = async () => {
        const data = await axios.get(`http://localhost:4000/api/my-cocktail/${id}/edit`);
        // console.log(data);
        dispatch(cocktailSliceAction.addedCocktailEditHandler(data.data));
    };
    console.log(deleteClicked);

    const editCocktailHandler = () => {
        navigate("edit");
        // console.log(id);
        fetchAddedDataEdit();
    };

    const deleteCocktailHandler = () => {
        // sendReqDeleteData();
        // setDeleteClicked((prev) => !prev);
        dispatch(UISliceActions.deleteHandler(true));
        // navigate("/my-cocktail");
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                {deleteClicked && <Confirmation />}
                {/* {addedCocktailDetail.map((item: AddedCocktailDetailTypes, index: number) => ( */}
                <div
                    // key={index}
                    className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
                >
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {detail?.name}
                            {/* <br className="hidden lg:inline-block" />
                                readymade gluten */}
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                            plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                            tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                            chambray.
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={deleteCocktailHandler}
                                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                Delete
                            </button>
                            <button
                                onClick={editCocktailHandler}
                                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={detail?.addressImage}
                        />
                    </div>
                </div>
                {/* ))} */}
            </section>
        </div>
    );
}

export default AddedCocktailsDetail;
