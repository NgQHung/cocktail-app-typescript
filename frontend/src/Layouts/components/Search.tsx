import {
    faMagnifyingGlass,
    faArrowDown,
    // faXmark,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { cocktailSliceAction } from "../../store/cocktail-slice";
import { notificationSliceActions } from "../../store/notification-slice";
import { searchSliceAction } from "../../store/search-slice";
import { UISliceActions } from "../../store/ui-slice";
// import { Alert } from "../../UI/Alert";
import { motion } from "framer-motion";
// import { motionSearchDown } from "../../UI/Animation";
import { useAppSelector } from "../../store/hook";

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location = useLocation();

    const [valueEntered, setValueEntered] = useState("");
    // const searchClicked: any = useSelector<any>((state) => state.searchSlice.searchClicked);
    const selectedType: any = useSelector<any>((state) => state.searchSlice.selectedType);
    // const alert: any = useSelector<any>((state) => state.notificationSlice.alertError);
    // const alertContent = useSelector((state: any) => state.notificationSlice.alertContent);
    const searchClicked = useAppSelector((state) => state.UISlice.searchClicked);

    // console.log(selectedType);

    const cocktailNameIsSelected = selectedType === "cocktail_name";
    const cocktailLetterIsSelected = selectedType === "cocktail_letter";
    const ingredientIsSelected = selectedType === "ingredient_id";

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValueEntered(e.currentTarget.value);
    };

    const typeSearchHandler = (e: any) => {
        const dataType = e.currentTarget.getAttribute("datatype");
        // console.log(dataType);
        dispatch(searchSliceAction.typeSearchHandler(dataType));
    };

    const isTypeSelected =
        cocktailNameIsSelected || cocktailLetterIsSelected || ingredientIsSelected;
    const searchHandler = (e?: any) => {
        e.preventDefault();
        if (isTypeSelected) {
            navigate(`/searched/${valueEntered}`);

            setValueEntered("");
        } else {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Error!",
                    description: "You must select a type first",
                    type: "error",
                })
            );
        }
        // }
    };

    // trigger enter as a onclick button
    const handleKeyboardEvent = (e: React.KeyboardEvent): void => {
        // e.preventDefault();
        if (e.key === "Enter" && isTypeSelected) {
            navigate(`/searched/${valueEntered}`);
            setValueEntered("");
        }
        if (e.key === "Enter" && !isTypeSelected) {
            dispatch(notificationSliceActions.alertHandler(null));
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Error!",
                    description: "You must select a type first",
                    type: "error",
                })
            );
        }
    };

    const closeSearchHandler = () => {
        dispatch(UISliceActions.searchHandler());
    };

    return (
        // mobile start
        <Fragment>
            {/* <div className="absolute">
                {alertContent && location.pathname === "/" ? <Alert /> : null}
            </div> */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    x: searchClicked ? 0 : -500,
                    opacity: searchClicked ? 1 : 0,
                    transition: {
                        duration: 1,
                        type: "tween",
                    },
                }}
                onKeyUp={handleKeyboardEvent}
                className="sm:hidden absolute top-0 right-0 w-full h-full sm:max-w-[512px] sm:w-full bg-gray-100 sm:rounded-md  sm:justify-center sm:mr-24 "
            >
                <div className=" flex flex-col lg:flex-row flex-start lg:items-center lg:w-full">
                    <div
                        className="order-last dropdown_search w-[95%] bg-transparent ml-2 border-b uppercase font-bold text-sm py-3 px-2 lg:py-1 lg:px-3 lg:p-4 lg:left-0 "
                        id=""
                    >
                        <div className="flex justify-between">
                            {!cocktailNameIsSelected &&
                            !cocktailLetterIsSelected &&
                            !ingredientIsSelected ? (
                                <div className="">all categories</div>
                            ) : null}
                            {cocktailNameIsSelected && <p>Search Cocktail By Name</p>}
                            {cocktailLetterIsSelected && <p>Search Cocktail By First Letter</p>}
                            {ingredientIsSelected && <p>Search Ingredient By Id</p>}
                            <div>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                        </div>
                        <div className="dropdown_search_list absolute w-full lg:w-1/2 top-full bg-gray-100 left-0 mt-4 shadow-lg cursor-pointer ">
                            <div
                                onClick={typeSearchHandler}
                                datatype="cocktail_name"
                                className="p-5 border-b hover:bg-gray-200 hover:transition-colors"
                            >
                                Search Cocktail By Name
                            </div>
                            <div
                                onClick={typeSearchHandler}
                                datatype="cocktail_letter"
                                className="p-5 border-b hover:bg-gray-200 hover:transition-colors"
                            >
                                Search Cocktail By First Letter
                            </div>
                            <div
                                onClick={typeSearchHandler}
                                datatype="ingredient_id"
                                className="p-5 hover:bg-gray-200 hover:transition-colors "
                            >
                                Search Ingredient By Id
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full py-3">
                        <div onClick={closeSearchHandler} className="sm:hidden px-4 ">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <input
                            onChange={changeHandler}
                            className="w-full h-full lg:border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 outline-0"
                            type="text"
                            placeholder="I'm searching for ..."
                            value={valueEntered}
                        />
                        <div
                            onClick={searchHandler}
                            className="ml-auto h-5 px-4 text-gray-500 cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* mobile end */}
            {/* <Fragment> */}
            {/* screen start */}
            <div
                onKeyUp={handleKeyboardEvent}
                className="hidden sm:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-[500px] lg:w-full bg-gray-100 rounded-md lg:flex  mr-24"
            >
                <div className="flex flex-col lg:flex-row flex-start lg:items-center lg:w-full">
                    <div
                        className="dropdown_search w-full bg-transparent border-b uppercase font-bold text-sm py-1 px-3 lg:p-4 lg:left-0 mx-4"
                        id=""
                    >
                        <div className="flex justify-between">
                            {!cocktailNameIsSelected &&
                            !cocktailLetterIsSelected &&
                            !ingredientIsSelected ? (
                                <div className="w-full">all categories</div>
                            ) : null}
                            {cocktailNameIsSelected && <p>Search Cocktail By Name</p>}
                            {cocktailLetterIsSelected && <p>Search Cocktail By First Letter</p>}
                            {ingredientIsSelected && <p>Search Ingredient By Id</p>}
                            <div>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                        </div>
                        <div className="dropdown_search_list absolute w-full top-full bg-gray-100 left-[-15px] mt-4 shadow-lg cursor-pointer ">
                            <div
                                onClick={typeSearchHandler}
                                datatype="cocktail_name"
                                className="p-5 border-b hover:bg-gray-200 hover:transition-colors"
                            >
                                Search Cocktail By Name
                            </div>
                            <div
                                onClick={typeSearchHandler}
                                datatype="cocktail_letter"
                                className="p-5 border-b hover:bg-gray-200 hover:transition-colors"
                            >
                                Search Cocktail By First Letter
                            </div>
                            <div
                                onClick={typeSearchHandler}
                                datatype="ingredient_id"
                                className="p-5 hover:bg-gray-200 hover:transition-colors "
                            >
                                Search Ingredient By Id
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full py-4">
                        <input
                            // className="w-full lg:border-l border-gray-300 bg-transparent font-semibold text-sm pl-4 "
                            onChange={changeHandler}
                            className="w-full h-full lg:border-l border-gray-300 bg-transparent font-semibold text-sm px-4 outline-0"
                            type="text"
                            placeholder="I'm searching for ..."
                            value={valueEntered}
                        />
                        <div className="ml-auto h-5 px-4 text-gray-500">
                            <div
                                onClick={searchHandler}
                                className="ml-auto h-5 px-4 text-gray-500 cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* screen end */}
        </Fragment>
    );
};

export default Search;
