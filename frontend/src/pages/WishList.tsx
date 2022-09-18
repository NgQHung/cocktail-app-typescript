import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../store/cocktail-slice";
import { notificationSliceActions } from "../store/notification-slice";
// import { Alert } from "../UI/Alert";

const WishList = () => {
    const cocktailsHeart: any = useSelector<any>((state) => state.cocktailSlice.cocktailsHeart);
    // const alertContent: any = useSelector<any>((state) => state.notificationSlice.alertRemoved);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();
    const amountCocktailsHeart = cocktailsHeart.length;

    const removeCocktailHeartHandler = (id: string) => {
        dispatch(cocktailSliceAction.removeCocktailHeart(id));
        dispatch(
            notificationSliceActions.alertHandler({
                title: "Well done!",
                description: "Cocktail is deleted successfully",
                type: "success",
            })
        );
    };

    const navigateHandler = (name: string) => {
        const nameUrl = name.split(" ").join("%");
        navigate("/cocktail/" + nameUrl);
    };

    return (
        <div className=" py-12">
            {/* Desktop Responsive Start */}
            {/* <div className="absolute">
                {alertContent && location.pathname === "/wish-list" ? <Alert /> : null}
            </div> */}
            <div className="hidden sm:flex flex-col justify-start items-start">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Favourites</h1>
                    <p className="text-base leading-4 text-gray-600 pb-1">
                        ({amountCocktailsHeart} Items)
                    </p>
                </div>
                <table className="w-full mt-16 whitespace-nowrap">
                    <thead
                        aria-label="table heading"
                        className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
                    >
                        <tr>
                            <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                                YOUR PRODUCT
                            </th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                DESCRIPTION
                            </th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                PRICE
                            </th>
                            <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                MORE OPTIONS
                            </th>
                            <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
                        </tr>
                    </thead>
                    <tbody className="w-full text-left">
                        {cocktailsHeart.map((item: any, inx: number) => (
                            <tr key={inx} className="border-gray-200 border-b">
                                <th>
                                    <img
                                        className="my-10 pl-4 lg:pl-10 2xl:pl-20"
                                        src={item.image}
                                        alt="girl"
                                    />
                                </th>
                                <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    <p className="text-base leading-4 text-gray-800">{item.name}</p>
                                </th>
                                <th className="my-10 pl-6 lg:pl-20 2xl:pl-52">
                                    <p>${item.price}</p>
                                </th>
                                <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                    <div
                                        onClick={() => navigateHandler(item.name)}
                                        className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline"
                                    >
                                        View detail
                                    </div>
                                </th>
                                <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                    <button
                                        onClick={() => removeCocktailHeartHandler(item.id)}
                                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"
                                    >
                                        <p>Remove Item</p>
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Desktop Responsive End */}
            {/* Mobile Responsive Start */}
            <div className=" flex justify-center items-center">
                <div className="sm:hidden flex flex-col justify-start items-start ">
                    <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p className="text-4xl font-semibold leading-9 text-gray-800">Favourites</p>
                        <p className="text-base leading-4 text-gray-600 pb-1">
                            ({amountCocktailsHeart} Items)
                        </p>
                    </div>
                    {cocktailsHeart.map((item: any, inx: number) => (
                        <div key={inx} className="border-gray-200 border-b pb-10">
                            <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
                                <div>
                                    <img src={item.image} alt="girl" />
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <p className="w-36 text-base leading-6 text-gray-800">
                                        {item.name}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base font-semibold leading-4 text-gray-800">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                            <div className="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                                <div>
                                    <p
                                        // href="javascript:void(0)"
                                        className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"
                                    >
                                        View details
                                    </p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => removeCocktailHeartHandler(item.id)}
                                        className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"
                                    >
                                        <p>Remove Item</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Mobile Responsive End */}
        </div>
    );
};
export default WishList;
