import { faMagnifyingGlass, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { notificationSliceActions } from "../../store/notification-slice";
import { searchSliceAction } from "../../store/search-slice";
import { Alert, AlertError } from "../../UI/Alert";

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [valueEntered, setValueEntered] = useState("");
    const searchClicked: any = useSelector<any>((state) => state.searchSlice.searchClicked);
    const selectedType: any = useSelector<any>((state) => state.searchSlice.selectedType);
    // const alert: any = useSelector<any>((state) => state.notificationSlice.alertError);
    const alertContent = useSelector((state: any) => state.notificationSlice.alertContent);
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
                })
            );
        }
    };

    useEffect(() => {
        let time = setTimeout(() => dispatch(notificationSliceActions.alertHandler(null)), 1000);
        return () => {
            clearTimeout(time);
        };
    }, [alertContent]);

    return (
        <Fragment>
            {alertContent && <Alert />}
            <div
                onKeyUp={handleKeyboardEvent}
                className="absolute left-1/2 -translate-x-1/2 w-full max-w-[320px] lg:max-w-[512px] lg:w-full bg-gray-100 rounded-md lg:flex  mr-24"
            >
                <div className="flex flex-col lg:flex-row flex-start lg:items-center lg:w-full">
                    <div
                        className="dropdown_search w-[95%] bg-transparent border-b uppercase font-bold text-sm py-1 px-3 lg:p-4 lg:left-0 mr-4"
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
                        <div className="dropdown_search_list absolute w-1/2 top-full bg-gray-100 left-0 mt-4 shadow-lg cursor-pointer ">
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
            </div>
        </Fragment>
    );
};

export default Search;
