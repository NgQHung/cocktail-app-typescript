import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchSliceAction } from "../../store/search-slice";
import { Button } from "../../UI/Button";

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [valueEntered, setValueEntered] = useState("");
    const [selectedType, setSelectedType] = useState("cocktail_name");
    const searchClicked: any = useSelector<any>((state) => state.searchSlice.searchClicked);
    const selectedTypes: any = useSelector<any>((state) => state.searchSlice.typeSearchClicked);

    const searchHandler = () => {
        dispatch(searchSliceAction.searchHandler());
        if (searchClicked) return navigate(`/searched/${valueEntered}`);
    };
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValueEntered(e.currentTarget.value);
    };

    const typeSearchHandler = (e: any) => {
        const dataValue = e.currentTarget.getAttribute("data-value");
        dispatch(searchSliceAction.typeSearchHandler(dataValue));
        if (dataValue === "cocktail_name") return setSelectedType("cocktail_name");
        if (dataValue === "cocktail_letter") return setSelectedType("cocktail_letter");
        if (dataValue === "ingredient_id") return setSelectedType("ingredient_id");
    };

    const style_search = !searchClicked ? "hidden" : "";

    const cocktailNameIsSelected = selectedType === "cocktail_name";
    const cocktailLetterIsSelected = selectedType === "cocktail_letter";
    const ingredientIsSelected = selectedType === "ingredient_id";

    return (
        <div className="flex justify-center">
            <div className="cursor-point" onClick={searchHandler}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className={`flex ${style_search} mr-12 ml-12`}>
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
            <input
                onChange={changeHandler}
                className={`border border-black w-96 rounded-xl ${style_search} 
                `}
            />
        </div>
    );
};

export default Search;
