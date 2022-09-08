import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";

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

    return (
        <Fragment>
            <div
                onClick={clickedCocktailHandler}
                // className="flex flex-col justify-center items-center bg-white rounded-lg mt-12 shadow-lg overflow-hidden mx-6 cursor-pointer"
                className="my-12 mx-6 cursor-pointer"
            >
                <Link to={`/cocktail/${name}`}>
                    <div
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

                                {/* <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span className="font-bold text-gray-800 dark:text-gray-200">
                                        $129
                                    </span>
                                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                                        Add to cart
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    );
};

export default CocktailItem;
