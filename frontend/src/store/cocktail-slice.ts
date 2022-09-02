import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../models/cocktails";
import { Http } from "../models/Http";

const initialValue: Http = {
    data: [],
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
    },
});

export const cocktailSliceAction = cocktailSlice.actions;

export default cocktailSlice.reducer;
