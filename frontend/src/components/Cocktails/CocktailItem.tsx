import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { notificationSliceActions } from "../../store/notification-slice";

interface Props {
    id?: number;
    name?: string;
    image?: string;
}

const CocktailItem: React.FC<Props> = (props) => {
    const { id, name, image } = props;

    const dispatch = useDispatch();
    const navigationClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.navigationClicked
    );

    const navigate = useNavigate();
    const clickedCocktailHandler = () => {
        // dispatch(cocktailSliceAction.clickedCocktailHandler({ id, name, image }));
        if (navigationClicked === true) dispatch(cocktailSliceAction.navigationHandler(false));
        // dispatch(cocktailSliceAction.navigationHandler());
    };
    const cocktailsBasket: any = useSelector<any>((state) => state.cocktailSlice.cocktailsBasket);

    const addCocktailHandler = () => {
        dispatch(
            cocktailSliceAction.addCocktail({
                name: name,
                image: image,
                id: id,
                amount: 1,
                price: 10,
                totalPrice: 0,
            })
        );
        dispatch(notificationSliceActions.alertHandlerAdded(true));
    };

    return (
        <Fragment>
            <div
                onClick={clickedCocktailHandler}
                // className="flex flex-col justify-center items-center bg-white rounded-lg mt-12 shadow-lg overflow-hidden mx-6 cursor-pointer"
                className="my-12 mx-6 cursor-pointer"
            >
                {/* <Link to={`/cocktail/${name}`}> */}
                {/* <div
                    // onClick={() => navigate(`/cocktail/${name}`)}
                    // className="flex flex-col items-center sm:w-48 sm:h-42"
                    // className="sm:w-48 sm:h-42 "
                    >
                        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div className="w-48 h-42 bg-gray-300 bg-center bg-cover rounded-lg overflow-hidden shadow-md">
                                <img src={image} alt={name} />
                            </div>

                            <div className="w-72 -mt-10 overflow-hidden bg-white rounded-lg  shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                                    {name}
                                </h3>
                            </div>
                        </div>
                    </div> */}
                {/* <div className=" 2xl:container 2xl:mx-auto">
                        <div className=" py-6 lg:px-20 md:px-6 px-4"> */}
                {/* <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10"> */}
                <div className=" relative ">
                    <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                        <p className="text-xs leading-3 text-gray-800">New</p>
                    </div>
                    <div className=" relative group">
                        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                        <img className=" w-full" src={image} alt={name} />
                        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100 ">
                            <button
                                onClick={addCocktailHandler}
                                className=" font-medium text-base leading-4 text-gray-800 bg-white hover:bg-gray-200 hover:transition-colors py-3 w-full"
                            >
                                Add to bag
                            </button>
                            <button
                                type="button"
                                className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white hover:text-black hover:bg-gray-100 hover:transition-all"
                                onClick={() => navigate("/cocktail/" + name)}
                            >
                                Quick View
                            </button>
                        </div>
                    </div>
                    <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                        {name}
                    </p>
                    <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                    {/* <p className=" font-normal text-base leading-4 text-gray-600 mt-4">
                                    2 colours
                                </p> */}
                </div>
                {/* </div> */}

                {/* </div>
                    </div> */}
                {/* </Link> */}
            </div>
        </Fragment>
    );
};

export default CocktailItem;
