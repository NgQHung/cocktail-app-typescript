import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { searchSliceAction } from "../../store/search-slice";
import { Button } from "../../UI/Button";
import { motion } from "framer-motion";
import { motionSearch, motionSearchType } from "../../UI/Animation";

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [valueEntered, setValueEntered] = useState("");
    const [selectedType, setSelectedType] = useState("cocktail_name");
    const searchClicked: any = useSelector<any>((state) => state.searchSlice.searchClicked);
    const selectedTypes: any = useSelector<any>((state) => state.searchSlice.typeSearchClicked);

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValueEntered(e.currentTarget.value);
    };

    const typeSearchHandler = (e: any) => {
        const dataValue = e.currentTarget.getAttribute("data-value");
        dispatch(searchSliceAction.typeSearchHandler(dataValue));
        if (dataValue === "cocktail_name") return setSelectedType("cocktail_name");
        if (dataValue === "cocktail_letter") return setSelectedType("cocktail_letter");
        if (dataValue === "ingredient_id") return setSelectedType("ingredient_id");
        // dispatch(searchSliceAction.typeSearchHandler(""));
        setValueEntered("");
    };

    const searchHandler = () => {
        if (searchClicked) {
            dispatch(searchSliceAction.searchHandler(false));
            navigate(`/searched/${valueEntered}`);
        }
        setValueEntered("");
    };

    // trigger enter as a onclick button
    const handleKeyboardEvent = (e: React.KeyboardEvent): void => {
        if (e.key === "Enter") {
            searchHandler();
        }
        dispatch(cocktailSliceAction.navigationHandler());
    };

    // close search section
    const closeSearchHandler = () => {
        dispatch(searchSliceAction.searchHandler(false));
        navigate("/");
    };
    const isSearch = location.pathname === "/search";

    useEffect(() => {
        if (isSearch) {
            dispatch(searchSliceAction.searchHandler(true));
        }
    }, [isSearch]);

    // console.log(location);

    const style_search = !searchClicked ? "hidden" : "";

    const cocktailNameIsSelected = selectedType === "cocktail_name";
    const cocktailLetterIsSelected = selectedType === "cocktail_letter";
    const ingredientIsSelected = selectedType === "ingredient_id";

    return (
        <nav onKeyUp={handleKeyboardEvent} className="flex flex-col mt-12 ">
            <motion.div
                variants={motionSearchType}
                initial="hidden"
                animate="visible"
                transition={motionSearchType.transition}
                className="flex justify-around items-center "
            >
                <div className={`flex ${style_search}`}>
                    <Button dataValue="cocktail_name" clickHandler={typeSearchHandler}>
                        <div
                            className={`text-xs border-2 rounded-xl p-2 hover:bg-green-300 ${
                                cocktailNameIsSelected ? "bg-green-500" : ""
                            } `}
                        >
                            Search Cocktail By Name
                        </div>
                    </Button>
                    <Button dataValue="cocktail_letter" clickHandler={typeSearchHandler}>
                        <div
                            className={`text-xs border-2 rounded-xl p-2 hover:bg-green-300 ${
                                cocktailLetterIsSelected ? "bg-green-500" : ""
                            } `}
                        >
                            Search Cocktail By First Letter
                        </div>
                    </Button>
                    <Button dataValue="ingredient_id" clickHandler={typeSearchHandler}>
                        <div
                            className={`text-xs border-2 rounded-xl p-2 hover:bg-green-300 ${
                                ingredientIsSelected ? "bg-green-500" : ""
                            } `}
                        >
                            Search Ingredient By Id
                        </div>
                    </Button>
                </div>

                <div
                    className="flex cursor-pointer hover:bg-gray-100 pl-2 pr-2 hover:text-red-500 text-2xl"
                    onClick={closeSearchHandler}
                >
                    {searchClicked && <FontAwesomeIcon icon={faXmark} />}
                </div>
            </motion.div>
            <motion.div
                variants={motionSearch}
                initial="hidden"
                animate="visible"
                transition={motionSearch.transition}
                className="flex justify-center mt-12 ml-48 mr-48 text-xl "
            >
                <div
                    className="flex items-center cursor-pointer hover:bg-gray-100 pl-2 pr-2 hover:text-green-500 font-normal opacity"
                    onClick={searchHandler}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <input
                    onChange={changeHandler}
                    className={`border w-full rounded-lg pt-4 pb-4 pl-4  ${style_search} 
                        `}
                    value={valueEntered}
                    placeholder="search..."
                />
            </motion.div>
            <div className="h-80"></div>
        </nav>
    );
};

export default Search;
