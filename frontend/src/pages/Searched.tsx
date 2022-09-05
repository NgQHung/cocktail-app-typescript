import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cocktail } from "../models/cocktails";
import Cocktails from "../components/Cocktails/Cocktails";

const Searched = () => {
    const [searchedCocktail, setSearchedCocktail] = useState([]);
    const params = useParams();

    const searchData = async () => {
        const res = await axios.get(
            `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktail}`
        );
        setSearchedCocktail(res.data.drinks);
    };

    useEffect(() => {
        searchData();
    }, [params.cocktail]);

    // console.log(params.cocktail);
    // const searchedCocktail: any = props.cocktailData.filter(
    //     (item) => item.strDrink === params.cocktail
    // );
    // props.cocktailData.map((item) => console.log(item.strDrink === params.cocktail));
    // console.log(searchedCocktail);
    return (
        <div>
            <Cocktails cocktailData={searchedCocktail} />
        </div>
    );
};

export default Searched;
