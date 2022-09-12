import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { Cocktail } from "../models/cocktails";
import { Http } from "../models/Http";

const initialValue: any = {
    data: [],
    clickedCocktail: [],
    navigationClicked: false,
    cocktails: [],
    amount: 0,
};
interface Action {
    type?: any;
    payload?: any;
}

const cocktailSlice = createSlice({
    name: "dataState",
    initialState: initialValue,
    reducers: {
        fetCocktail(state: Http, action: Action) {
            state.data = action.payload;
        },
        navigationHandler(state, action) {
            state.navigationClicked = action.payload;
            state.clickedCocktail = null;
        },
        clickedCocktailHandler(state, action) {
            state.clickedCocktail = action.payload;
        },
        addCocktail(state, action) {
            const idCocktail = action.payload.id;
            const existingCocktailIndex = state.cocktails.findIndex(
                (item: any) => item.id === idCocktail
            );
            const existingCocktail = state.cocktails[existingCocktailIndex];
            // console.log(existingCocktail.amount);
            // console.log(action.payload.amount);
            // console.log(existingCocktail);
            let updateCocktails;
            if (existingCocktail) {
                const updateCocktail = {
                    ...existingCocktail,
                    amount: existingCocktail.amount + action.payload.amount,
                };
                // console.log(updateCocktail);
                updateCocktails = [...state.cocktails];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktails = updateCocktails;
                // console.log(state.cocktails);
            } else {
                state.cocktails = [...state.cocktails, action.payload];
                // console.log(state.cocktails);
            }
            // console.log(updateCocktails);
            // return {
            //     cocktails: updateCocktails,
            // };
        },
        removeCocktail(state, action) {
            const existingCocktailIndex = state.cocktails.findIndex(
                (item: any) => item.id === action.payload
            );
            const existingCocktail = state.cocktails[existingCocktailIndex];
            let updateCocktails;
            if (existingCocktail.amount === 1) {
                updateCocktails = state.cocktails.filter((item: any) => item.id !== action.payload);
                state.cocktails = updateCocktails;
            } else {
                const updateCocktail = {
                    ...existingCocktail,
                    amount: existingCocktail.amount - 1,
                };
                updateCocktails = [...state.cocktails];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktails = updateCocktails;
            }
        },
    },
});

export const cocktailSliceAction = cocktailSlice.actions;

export default cocktailSlice.reducer;
