import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../models/cocktails";

interface ISearchedData {
    searchClicked: boolean;
    selectedType: string;
    searchedData: Cocktail[];
    searchedDataToShow: Cocktail[];
}

const initialValue: ISearchedData = {
    searchClicked: false,
    selectedType: "",
    searchedData: [],
    searchedDataToShow: [],
};
// interface Action {
//     type?: any;
//     payload?: any;
// }

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
        getSearchedData(state, action) {
            state.searchedData = action.payload;
        },
        getSearchedDataToShow(state, action) {
            if (state.searchedData.length > 0) {
                state.searchedDataToShow = state.searchedData.slice(0, 20);
            }
        },
    },
});

export const searchSliceAction = searchSlice.actions;

export default searchSlice.reducer;
