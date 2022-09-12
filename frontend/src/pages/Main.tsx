import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Cocktails from "../components/Cocktails/Cocktails";
import { Cocktail } from "../models/cocktails";

interface Props {
    cocktailData?: Cocktail[];
    selectedType?: string;
    loadMore?: () => void;
    amountCocktail?: number;
}

const Main: React.FC<Props> = (props) => {
    return (
        <div>
            <div className=" 2xl:container 2xl:mx-auto">
                <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                    <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
                        Summer Collection Vol-1
                    </p>
                </div>
                <div className=" py-6 lg:px-20 md:px-6 px-4">
                    {/* <p className=" font-normal text-sm leading-3 text-gray-600 ">
                        <Link to="/">Home</Link> / Shop by Category / Women
                    </p>
                    <hr className=" w-full bg-gray-200 my-6" /> */}

                    <div className=" flex justify-between items-center">
                        <div className=" flex space-x-3 justify-center items-center">
                            <FontAwesomeIcon icon={faFilter} />
                            <p className=" font-normal text-base leading-4 text-gray-800">Filter</p>

                            <Cocktails
                                cocktailData={props.cocktailData}
                                loadMore={props.loadMore}
                                amountCocktail={props.amountCocktail}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
