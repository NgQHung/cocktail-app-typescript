import axios from "axios";
import { Cocktail } from "../models/cocktails";
import { cocktailSliceAction } from "./cocktail-slice";
export const getAllCocktail = async () => {
    return async (dispatch: any) => {
        const sendRequest = async () => {
            const response = await axios.get("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
            const data = response.data.drinks;
            console.log(data);
            return data;
        };
        // try {
        //     const data = await sendRequest();
        //     dispatch(cocktailSliceAction.fetCocktail(data));
        //     // console.log(data);
        // } catch (error) {
        //     console.log(error);
        // }
    };
};
