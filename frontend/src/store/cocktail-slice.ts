import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../models/cocktails";
import { Http } from "../models/Http";

const initialValue: Http = {
    data: [],
    clickedCocktail: [],
};
interface Action {
    type?: any;
    payload: any;
}

const cocktailSlice = createSlice({
    name: "dataState",
    initialState: initialValue,
    reducers: {
        fetCocktail(state: Http, action: Action) {
            state.data = action.payload;
            // console.log(action.payload);
        },
        clickedCocktailHandler(state, action) {
            state.clickedCocktail = action.payload;
        },
    },
});

export const cocktailSliceAction = cocktailSlice.actions;

export default cocktailSlice.reducer;
