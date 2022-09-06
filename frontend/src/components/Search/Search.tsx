import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { Button } from "../../UI/Button";

const Search = () => {
    const dispatch = useDispatch();
    const [valueEntered, setValueEntered] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const searchClicked: any = useSelector<any>((state) => state.cocktailSlice.searchClicked);
    const typeSearchClicked: any = useSelector<any>(
        (state) => state.cocktailSlice.typeSearchClicked
    );

    const navigate = useNavigate();
    const searchHandler = () => {
        dispatch(cocktailSliceAction.searchHandler());
        if (searchClicked) return navigate(`/searched/${valueEntered}`);
    };
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValueEntered(e.currentTarget.value);
    };
    const active = "bg-green-500";

    const typeSearchHandler = (e: any) => {
        dispatch(cocktailSliceAction.typeSearchHandler());
        // console.log(e.currentTarget.classList.toggle(active));
        const dataValue = e.currentTarget.getAttribute("data-value");
        if (dataValue === "cocktail_name") return setSelectedType("cocktail_name");
        if (dataValue === "cocktail_letter") return setSelectedType("cocktail_letter");
        if (dataValue === "ingredient_id") return setSelectedType("ingredient_id");
    };

    // const active = 'bg-'

    const style_search = !searchClicked ? "hidden" : "";
    // console.log(selectedType);
    return (
        <div className="flex justify-center">
            <div className="cursor-point" onClick={searchHandler}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className={`flex ${style_search} mr-12 ml-12`}>
                <Button dataValue="cocktail_name" clickHandler={typeSearchHandler}>
                    <div
                        className={`text-xs border-2 rounded-xl p-2 hover:bg-green-300 ${
                            selectedType === "cocktail_name" ? active : ""
                        }`}
                    >
                        Search Cocktail By Name
                    </div>
                </Button>
                <Button dataValue="cocktail_letter" clickHandler={typeSearchHandler}>
                    <div
                        className={`text-xs border-2 rounded-xl p-2 hover:bg-green-300 ${
                            selectedType === "cocktail_letter" ? active : ""
                        }`}
                    >
                        Search Cocktail By First Letter
                    </div>
                </Button>
                <Button dataValue="ingredient_id" clickHandler={typeSearchHandler}>
                    <div
                        className={`text-xs border-2 rounded-xl p-2 hover:bg-green-300 ${
                            selectedType === "ingredient_id" ? active : ""
                        }`}
                    >
                        Search Ingredient By Id
                    </div>
                </Button>
            </div>
            {/* <input
                onChange={changeHandler}
                className={`border border-black w-96 rounded-xl ${style_search} 
                ${type_search}
                `}
            /> */}
        </div>
    );
};

export default Search;
