import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cocktail } from "../models/cocktails";
import Cocktails from "../components/Cocktails/Cocktails";

const Searched = () => {
    const [searchedCocktail, setSearchedCocktail] = useState([]);
    const params = useParams();

    const searchDataByName = async () => {
        const res = await axios.get(
            `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktail}`
        );
        setSearchedCocktail(res.data.drinks);
    };
    const searchDataByFirstLetter = async () => {
        const res = await axios.get(
            `www.thecocktaildb.com/api/json/v1/1/search.php?f=${params.cocktail}`
        );
    };
    const searchIngredientByName = async () => {
        const res = await axios.get(
            `www.thecocktaildb.com/api/json/v1/1/search.php?i=${params.cocktail}`
        );
    };

    useEffect(() => {
        searchDataByName();
    }, [params.cocktail]);

    return (
        <div>
            <Cocktails cocktailData={searchedCocktail} />
        </div>
    );
};

export default Searched;
