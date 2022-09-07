import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../models/cocktails";
// import { Http } from "../models/Http";

const initialValue: any = {
    searchClicked: false,
    selectedType: "cocktail_name",
};
interface Action {
    type?: any;
    payload?: any;
}

const searchSlice = createSlice({
    name: "dataState",
    initialState: initialValue,
    reducers: {
        searchHandler(state, action) {
            state.searchClicked = action.payload;
        },
        typeSearchHandler(state, action) {
            state.selectedType = action.payload;
        },
    },
});

export const searchSliceAction = searchSlice.actions;

export default searchSlice.reducer;
