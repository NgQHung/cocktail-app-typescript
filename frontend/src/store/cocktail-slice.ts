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
    totalPrice: 0,
    price: 0,
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
            // state.totalPrice = action.payload.price * action.payload.price + state.price;
            const existingCocktailIndex = state.cocktails.findIndex(
                (item: any) => item.id === idCocktail
            );
            const existingCocktail = state.cocktails[existingCocktailIndex];
            let updateCocktails;
            if (existingCocktail) {
                const updateCocktail = {
                    ...existingCocktail,
                    amount: existingCocktail.amount + action.payload.amount,
                    totalPrice:
                        action.payload.price * existingCocktail.amount + action.payload.price,
                };
                updateCocktails = [...state.cocktails];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktails = updateCocktails;
            } else {
                state.cocktails = [...state.cocktails, action.payload];
            }
            // state.totalPrice = state.cocktails
            //     .map((item: any) => item.price)
            //     .reduce((prev: any, curr: any) => prev + curr, 0);
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
                    totalPrice: existingCocktail.totalPrice - existingCocktail.price,
                };
                updateCocktails = [...state.cocktails];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktails = updateCocktails;
            }
            // state.totalPrice = state.cocktails
            //     .map((item: any) => item.price)
            //     .reduce((prev: any, curr: any) => prev + curr, 0);
        },
    },
});

export const cocktailSliceAction = cocktailSlice.actions;

export default cocktailSlice.reducer;
