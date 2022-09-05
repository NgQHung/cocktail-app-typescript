import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../models/cocktails";
import { Http } from "../models/Http";

const initialValue: Http = {
    data: [],
    clickedCocktail: [],
    navigationClicked: false,
    searchClicked: false,
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
        navigationHandler(state) {
            state.navigationClicked = !state.navigationClicked;
        },
        clickedCocktailHandler(state, action) {
            state.clickedCocktail = action.payload;
        },
        searchHandler(state) {
            state.searchClicked = !state.searchClicked;
        },
    },
});

export const cocktailSliceAction = cocktailSlice.actions;

export default cocktailSlice.reducer;
