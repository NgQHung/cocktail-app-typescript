import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

const Search = () => {
    return (
        <Fragment>
            <div className="lg:block absolute left-1/2 -translate-x-1/2 w-full max-w-[320px] lg:max-w-[512px] 2xl:max-w-2xl bg-gray-100 rounded-md xl:flex  mr-24">
                <div className="flex flex-col lg:flex-row flex-start lg:items-center">
                    <select
                        className="max-w-[170px] bg-transparent uppercase font-bold text-sm py-1 px-3 lg:p-4 lg:left-0 mr-4"
                        name=""
                        id=""
                    >
                        <option className="">all categories</option>
                        <option value="">Search Cocktail By Name</option>
                        <option value="">Search Cocktail By First Letter</option>
                        <option value="">Search Ingredient By Id</option>
                    </select>
                    <div className="flex justify-between w-full py-4">
                        <input
                            className="w-full border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 "
                            type="text"
                            placeholder="I'm searching for ..."
                        />
                        <div className="ml-auto h-5 px-4 text-gray-500">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
                <select
                    className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
                    name=""
                    id=""
                >
                    <option>all categories</option>
                </select>
                <input
                    className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
                    type="text"
                    placeholder="I'm searching for ..."
                />
                <svg
                    className="ml-auto h-5 px-4 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="search"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    // className="svg-inline--fa fa-search fa-w-16 fa-9x"
                >
                    <path
                        fill="currentColor"
                        d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                    ></path>
                </svg>
            </div> */}
        </Fragment>
    );
};

export default Search;
