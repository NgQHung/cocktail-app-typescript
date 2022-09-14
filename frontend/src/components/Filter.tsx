import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Filter = () => {
    return (
        <React.Fragment>
            <div className="2xl:container 2xl:mx-auto lg:absolute sm:w-[600px] lg:top-full lg:left-0 z-50 bg-white">
                <div
                    id="filterSection"
                    className={"relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full "}
                >
                    {/* Cross button Code  */}
                    <div
                        // onClick={() => setShowfilters(false)}
                        className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </div>

                    {/* Colors Section */}
                    <div>
                        <div className=" flex space-x-2">
                            <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                                Colors
                            </p>
                        </div>
                        <div className=" md:flex md:justify-between  mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
                                <div className=" w-4 h-4 rounded-full bg-white shadow"></div>
                                <p className=" text-base leading-4 text-gray-600 font-normal">
                                    White
                                </p>
                            </div>
                            <div className=" flex space-x-2 justify-center items-center">
                                <div className=" w-4 h-4 rounded-full bg-blue-600 shadow"></div>
                                <p className=" text-base leading-4 text-gray-600 font-normal">
                                    Blue
                                </p>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <div className=" w-4 h-4 rounded-full bg-red-600 shadow"></div>
                                <p className=" text-base leading-4 text-gray-600 font-normal">
                                    Red
                                </p>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
                                <div className=" w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
                                <p className=" text-base leading-4 text-gray-600 font-normal">
                                    Indigo
                                </p>
                            </div>
                            <div className=" flex space-x-2 justify-center items-center">
                                <div className=" w-4 h-4 rounded-full bg-black shadow"></div>
                                <p className=" text-base leading-4 text-gray-600 font-normal">
                                    Black
                                </p>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <div className=" w-4 h-4 rounded-full bg-purple-600 shadow"></div>
                                <p className=" text-base leading-4 text-gray-600 font-normal">
                                    Purple
                                </p>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <div className=" w-4 h-4 rounded-full bg-gray-600 shadow"></div>
                                <p className=" text-base leading-4 text-gray-600 font-normal">
                                    Grey
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                    {/* Material Section */}
                    <div>
                        <div className=" flex space-x-2">
                            <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                                Type
                            </p>
                        </div>
                        <div className=" md:flex md:justify-between  mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input
                                    className="w-4 h-4 "
                                    type="checkbox"
                                    id="alcoholic"
                                    name="alcoholic"
                                    value="alcoholic"
                                    // checked={alcoholic}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" flex justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="alcoholic"
                                        >
                                            Alcoholic
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input
                                    className="w-4 h-4"
                                    type="checkbox"
                                    id="non-Alcoholic"
                                    name="non-Alcoholic"
                                    value="non-Alcoholic"
                                    // checked={non-Alcoholic}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className="  text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="non-Alcoholic"
                                        >
                                            Non-Alcoholic
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="gin"
                                    name="gin"
                                    value="gin"
                                    // checked={gin}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="gin"
                                        >
                                            Gin
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="vodka"
                                    name="vodka"
                                    value="vodka"
                                    // checked={vodka}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="vodka"
                                        >
                                            Vodka
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="cocktailGlass"
                                    name="cocktailGlass"
                                    value="cocktailGlass"
                                    // checked={cocktailGlass}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="cocktailGlass"
                                        >
                                            Cocktail Glass
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="champagneFlute"
                                    name="champagneFlute"
                                    value="champagneFlute"
                                    // checked={champagneFlute}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="champagneFlute"
                                        >
                                            Champagne Flute
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="ordinaryDrink"
                                    name="ordinaryDrink"
                                    value="ordinaryDrink"
                                    // checked={ordinaryDrink}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="ordinaryDrink"
                                        >
                                            Ordinary Drink
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="cocktail"
                                    name="cocktail"
                                    value="cocktail"
                                    // checked={cocktail}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="cocktail"
                                        >
                                            Cocktail
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                    {/* Size Section */}
                    <div>
                        <div className=" flex space-x-2">
                            <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                                Size
                            </p>
                        </div>
                        <div className=" md:flex md:justify-between  mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                            <div className=" flex md:justify-center md:items-center items-center justify-start ">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="Large"
                                    name="large"
                                    value="Large"
                                    // checked={large}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="Large"
                                        >
                                            Large
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start ">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="Medium"
                                    name="medium"
                                    value="Medium"
                                    // checked={medium}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="Medium"
                                        >
                                            Medium
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex md:justify-center md:items-center items-center justify-end ">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="Small"
                                    name="small"
                                    value="Small"
                                    // checked={small}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="Small"
                                        >
                                            Small
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex md:justify-center md:items-center items-center justify-start ">
                                <input
                                    className="w-4 h-4 mr-2"
                                    type="checkbox"
                                    id="Mini"
                                    name="mini"
                                    value="Mini"
                                    // checked={mini}
                                    // onChange={changeHandler}
                                />
                                <div className=" inline-block">
                                    <div className=" fl justify-center items-center">
                                        <label
                                            className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                                            htmlFor="Mini"
                                        >
                                            Mini
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

                    {/* Collection Section */}

                    <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-30 md:px-6">
                        <button
                            // onClick={applyFilters}
                            className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Filter;
