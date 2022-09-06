import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../models/cocktails";
// import { Http } from "../models/Http";

const initialValue: any = {
    searchClicked: false,
    selectedType: "",
};
interface Action {
    type?: any;
    payload?: any;
}

const searchSlice = createSlice({
    name: "dataState",
    initialState: initialValue,
    reducers: {
        searchHandler(state) {
            state.searchClicked = !state.searchClicked;
        },
        typeSearchHandler(state, action) {
            state.selectedType = action.payload;
        },
    },
});

export const searchSliceAction = searchSlice.actions;

export default searchSlice.reducer;
