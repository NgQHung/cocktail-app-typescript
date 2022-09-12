import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { Cocktail } from "../models/cocktails";
import { Http } from "../models/Http";

const initialValue: any = {
    data: [],
    clickedCocktail: [],
    navigationClicked: false,
    addedCocktails: [],
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
            state.addedCocktails = [...state.addedCocktails, action.payload];
        },
        removeCocktail(state, action) {
            state.addedCocktails = state.addedCocktails.filter(
                (item: any) => item.id !== action.payload
            );
            // state.
        },
    },
});

export const cocktailSliceAction = cocktailSlice.actions;

export default cocktailSlice.reducer;
