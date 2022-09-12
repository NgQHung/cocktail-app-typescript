import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cocktailSliceAction } from "../../store/cocktail-slice";

const ShoppingCart = () => {
    const cocktailsBasket: any = useSelector<any>((state) => state.cocktailSlice.cocktailsBasket);
    const totalPrices = cocktailsBasket
        .map((item: any) => item.totalPrice)
        .reduce((prev: number, curr: number) => prev + curr, 0);
    const dispatch = useDispatch();

    const removeCocktailHandler = (id: string) => {
        dispatch(cocktailSliceAction.removeCocktail(id));
    };

    const heartHandler = (cocktailHeart: any) => {
        dispatch(cocktailSliceAction.heartHandler(cocktailHeart));
    };

    return (
        <Fragment>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-xl font-semibold">Your cart</h2>

                {cocktailsBasket.map((cocktail: any, inx: number) => (
                    <div key={inx}>
                        <ul className="flex flex-col divide-y divide-gray-700">
                            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                <div className="flex w-full space-x-2 sm:space-x-4">
                                    <img
                                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                                        src={cocktail.image}
                                        alt="Polaroid camera"
                                    />
                                    <div className="flex flex-col justify-between w-full pb-4">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <div className="space-y-1">
                                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                    {cocktail.name}
                                                </h3>
                                                <p className="text-sm dark:text-gray-400">
                                                    Total price
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-lg font-semibold">
                                                    {cocktail.price}€
                                                </p>
                                                <p className="text-sm dark:text-gray-600">
                                                    {cocktail.totalPrice}€
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <p className="text-sm">Quantity:</p>
                                            <p className="text-sm dark:text-gray-600">
                                                {cocktail.amount}
                                            </p>
                                        </div>
                                        <div className="flex text-sm divide-x">
                                            <button
                                                type="button"
                                                className="flex items-center px-2 py-1 pl-0 space-x-1"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                                <div
                                                    onClick={() =>
                                                        removeCocktailHandler(cocktail.id)
                                                    }
                                                >
                                                    <span>Remove</span>
                                                </div>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => heartHandler(cocktail)}
                                                className="flex items-center px-2 py-1 space-x-1"
                                            >
                                                <FontAwesomeIcon icon={faHeart} />

                                                <span>Add to favorites</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                ))}

                {cocktailsBasket?.length === 0 ? (
                    <h1 className="text-center text-2xl font-bold">Your cart is empty</h1>
                ) : (
                    <div>
                        <div className="space-y-1 text-right">
                            <p>
                                Total amount:
                                <span className="font-semibold"> {totalPrices} €</span>
                            </p>
                            <p className="text-sm dark:text-gray-400">
                                Not including taxes and shipping costs
                            </p>
                        </div>
                        {/* <div className=" space-x-4"> */}
                        <div className="text-center mt-4">
                            <button
                                type="button"
                                className="text-center px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                            >
                                <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* </div> */}
        </Fragment>
    );
};

export default ShoppingCart;
