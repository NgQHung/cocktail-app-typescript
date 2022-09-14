import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cocktails from "../components/Cocktails/Cocktails";
import { useSelector } from "react-redux";

const Searched = () => {
    const [searchedCocktail, setSearchedCocktail] = useState([]);
    const params = useParams();
    const selectedType: any = useSelector<any>((state) => state.searchSlice.selectedType);

    const searchDataByName = async () => {
        const res = await axios.get(
            `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktail}`
        );
        setSearchedCocktail(res.data.drinks);
    };
    // const searchDataByName = async () => {
    //     const res = await axios.post(
    //         `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktail}`
    //     );
    //     setSearchedCocktail(res.data.drinks);
    // };
    const searchDataByFirstLetter = async () => {
        const res = await axios.get(
            `http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${params.cocktail}`
        );
        setSearchedCocktail(res.data.drinks);
    };
    const searchIngredientByName = async () => {
        const res = await axios.get(
            `http://www.thecocktaildb.com/api/json/v1/1/search.php?i=${params.cocktail}`
        );
        setSearchedCocktail(res.data.ingredients);
    };
    const cocktailNameIsSelected = selectedType === "cocktail_name";
    const cocktailLetterIsSelected = selectedType === "cocktail_letter";
    const ingredientIsSelected = selectedType === "ingredient_id";
    // console.log(params);

    useEffect(() => {
        if (cocktailNameIsSelected) {
            searchDataByName();
        }
        if (cocktailLetterIsSelected) {
            searchDataByFirstLetter();
        }
        if (ingredientIsSelected) {
            searchIngredientByName();
        }
    }, [params?.cocktail]);

    return (
        <div>
            <Cocktails cocktailData={searchedCocktail} selectedType={selectedType} />
        </div>
    );
};

export default Searched;
