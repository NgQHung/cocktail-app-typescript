import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { useAppDispatch, useAppSelector } from "../../store/hook";

interface AddedCocktailsTypes {
    _id: string;
    name: string;
    type: string;
    price: number;
    addressImage: string;
    __v?: 0;
}

const AddedCocktails = () => {
    const addedCocktails = useAppSelector((state) => state.cocktailSlice.addedCocktails);
    const addedCocktailDetail = useAppSelector((state) => state.cocktailSlice.addedCocktailDetail);
    const dispatch = useAppDispatch();
    // console.log(addedCocktails);

    const navigate = useNavigate();

    const fetchData = async (id: string) => {
        const detail = await axios.get(
            "http://localhost:4000/api/my-cocktail/added-cocktails/" + id
        );
        dispatch(cocktailSliceAction.addedCocktailDetailHandler([detail.data]));
    };
    const cocktailDetailHandler = (id: string) => {
        navigate(id);
        fetchData(id);
    };

    return (
        <div>
            <div className="bg-gray-100 ">
                {/* Remove py-8 */}
                <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                        {/* Card 1 */}
                        {addedCocktails?.map((item: AddedCocktailsTypes) => (
                            <div
                                onClick={() => cocktailDetailHandler(item._id)}
                                key={item.name}
                                className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer"
                            >
                                <div>
                                    <img
                                        src={item.addressImage ? item.addressImage : ""}
                                        alt={item.name}
                                        className="w-full h-44"
                                    />
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4 cursor-pointer">
                                        <div>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-2">
                                            {/* The Apple iPhone XS is available in 3 colors with 64GB
                                            memory. Shoot amazing videos */}
                                        </p>
                                        <div className="flex items-center justify-between py-4">
                                            <h3 className="text-indigo-700 text-xl font-semibold">
                                                $350
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedCocktails;
