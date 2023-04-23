import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cocktails from "../components/Cocktails/Cocktails";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/hook";
import { searchSliceAction } from "../store/search-slice";
import { dataSliceActions } from "../store/slice-http";
import { UISliceActions } from "../store/ui-slice";
import { notificationSliceActions } from "../store/notification-slice";

const Searched = () => {
    const [searchedCocktail, setSearchedCocktail] = useState([]);
    const params = useParams();
    const dispatch = useAppDispatch();
    const selectedType: any = useSelector<any>((state) => state.searchSlice.selectedType);

    const searchDataByName = async () => {
        const res = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktail}`);
        dispatch(searchSliceAction.getSearchedData(res.data.drinks));
        dispatch(dataSliceActions.getAllCocktail(res.data.drinks));
        setSearchedCocktail(res.data.drinks);
    };
    // const searchDataByName = async () => {
    //     const res = await axios.post(
    //         `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.cocktail}`
    //     );
    //     setSearchedCocktail(res.data.drinks);
    // };
    const searchDataByFirstLetter = async () => {
        try {
            dispatch(UISliceActions.loadingHandler(true));
            dispatch(notificationSliceActions.alertErrorHandler(true));
            const res = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${params.cocktail}`);
            setSearchedCocktail(res.data.drinks);
        } catch (error: any) {
            dispatch(notificationSliceActions.alertHandler(error.response.data.message));
        }
        dispatch(UISliceActions.loadingHandler(false));
    };
    const searchIngredientByName = async () => {
        try {
            dispatch(UISliceActions.loadingHandler(true));
            dispatch(notificationSliceActions.alertErrorHandler(true));
            const res = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?i=${params.cocktail}`);
            setSearchedCocktail(res.data.ingredients);
        } catch (error: any) {
            dispatch(notificationSliceActions.alertHandler(error.response.data.message));
        }
        dispatch(UISliceActions.loadingHandler(false));
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
