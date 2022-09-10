import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const Search = () => {
    return (
        <Fragment>
            <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md xl:flex items-center mr-24">
                <select
                    className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
                    name=""
                    id=""
                >
                    <option>all categories</option>
                    <option value="">Search Cocktail By Name</option>
                    <option value="">Search Cocktail By First Letter</option>
                    <option value="">Search Ingredient By Id</option>
                </select>
                <input
                    className="w-full border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
                    type="text"
                    placeholder="I'm searching for ..."
                />
                <div className="ml-auto h-5 px-4 text-gray-500">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </Fragment>
    );
};

export default Search;
