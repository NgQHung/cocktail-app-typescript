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
    let type_search_hidden = "hidden";
    const type_search_clicked = "bg-red-500";
    let cocktailName;
    let cocktailId;
    let ingredientId;

    const typeSearchHandler = (e: any) => {
        dispatch(cocktailSliceAction.typeSearchHandler());
        console.log(e.currentTarget.getAttribute("data-value"));
        const dataValue = e.currentTarget.getAttribute("data");
        cocktailName = dataValue === "cocktail_name";
        cocktailId = dataValue === "cocktail_id";
        ingredientId = dataValue === "ingredient_id";
        // if(dataValue === 'cocktail_name') return
    };

    const style_search = !searchClicked ? "hidden" : "";
    const type_search = !typeSearchClicked ? "hidden" : "";

    return (
        <div className="flex justify-center">
            <div className="cursor-point" onClick={searchHandler}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div
                className={`flex ${style_search} ${
                    cocktailName ? "type_search_clicked" : ""
                } mr-12 ml-12`}
            >
                <Button dataValue="cocktail_name" clickHandler={typeSearchHandler}>
                    <div className="text-xs cocktail_name">Search Cocktail By Name</div>
                </Button>
                <Button dataValue="cocktail_letter" clickHandler={typeSearchHandler}>
                    <div className="text-xs ">Search Cocktail By First Letter</div>
                </Button>
                <Button dataValue="ingredient_id" clickHandler={typeSearchHandler}>
                    <div className="text-xs ">Search Ingredient By Id</div>
                </Button>
            </div>
            <input
                onChange={changeHandler}
                className={`border border-black w-96 rounded-xl ${style_search} ${type_search}`}
            />
        </div>
    );
};

export default Search;
