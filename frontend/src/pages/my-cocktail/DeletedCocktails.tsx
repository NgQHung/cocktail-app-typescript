import axios from "axios";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Confirmation from "../../components/Confirmation";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { notificationSliceActions } from "../../store/notification-slice";
import { UISliceActions } from "../../store/ui-slice";
import { baseURL } from "../../utils/baseUrl";

interface DeletedCocktailsTypes {
    _id: string;
    name: string;
    type: string;
    price: number;
    addressImage: string;
    __v?: 0;
}

const DeletedCocktails = () => {
    const deletedCocktails = useAppSelector((state) => state.cocktailSlice.deletedCocktails);
    const deleteClicked = useAppSelector((state) => state.UISlice.deleteClicked);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    const cocktailDetailHandler = (id: string) => {
        navigate("/my-cocktail/" + id);
    };

    const restoreCocktailHandler = async (id: string) => {
        const res = await axios.patch(`${baseURL.server}/api/my-cocktail/trash/${id}/restore`);
        dispatch(
            notificationSliceActions.alertHandler({
                title: "Well done",
                description: res.data.msg,
                type: "success",
            })
        );
        setTimeout(() => navigate(""), 1000);
    };

    const forceDeleteCocktailHandler = (id: string) => {
        dispatch(UISliceActions.deleteHandler(true));
        dispatch(
            UISliceActions.confirmationHandler({
                title: "Force Delete",
                description:
                    "Are you sure you want to delete this created cocktail? You will lose all of your data by deleting your Cocktail. This action cannot be undone.?",
            })
        );
    };

    useEffect(() => {
        const fetchAddedData = async () => {
            const data = await axios.get(`${baseURL.server}/api/my-cocktail/trash/cocktails`);

            dispatch(cocktailSliceAction.deletedCocktailHandler(data.data));
        };
        try {
            fetchAddedData();
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
        <div className="absolute top-[120px] w-full h-full bg-gray-100 z-10">
            {deleteClicked && <Confirmation />}

            <div>
                <div className="sm:px-6 w-full">
                    <div className="px-4 md:px-10 py-4 md:py-7">
                        <div className="flex items-center justify-between">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                                Cocktails
                            </p>
                            <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                                <p>Sort By:</p>
                                <select className="focus:outline-none bg-transparent ml-1">
                                    <option className="text-sm text-indigo-800">Latest</option>
                                    <option className="text-sm text-indigo-800">Oldest</option>
                                    <option className="text-sm text-indigo-800">Latest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <Link to="/my-cocktail">
                            <div className="sm:flex items-center justify-between">
                                <button
                                    // onclick="popuphandler(true)"
                                    className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                                >
                                    <p className="text-sm font-medium leading-none text-white">Back</p>
                                </button>
                            </div>
                        </Link>
                        <div className="mt-7 overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <tbody>
                                    {deletedCocktails?.cocktail?.map((item: DeletedCocktailsTypes) => (
                                        // <div>
                                        <tr key={item._id} className="h-16 border border-gray-100 rounded">
                                            <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                                                        />
                                                        <div className="check-icon  bg-indigo-700 text-white rounded-sm">
                                                            <svg
                                                                className="icon icon-tabler icon-tabler-check"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="1.5"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M5 12l5 5l10 -10" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">
                                                        {item.name}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className=" text-right ">
                                                <button
                                                    // onClick={deleteCocktailHandler}
                                                    onClick={() => forceDeleteCocktailHandler(item._id)}
                                                    className="py-3 px-3 text-sm focus:outline-none leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                            <td className=" text-right ">
                                                <button
                                                    // onClick={deleteCocktailHandler}
                                                    onClick={() => restoreCocktailHandler(item._id)}
                                                    className="py-3 px-3 text-sm focus:outline-none leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded"
                                                >
                                                    Restore
                                                </button>
                                            </td>
                                            <td className="text-right pr-4">
                                                <button
                                                    onClick={() => cocktailDetailHandler(item._id)}
                                                    className=" text-sm leading-none cursor-pointer text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                                                >
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletedCocktails;
