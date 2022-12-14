import { createSlice } from "@reduxjs/toolkit";

const initialValue: any = {
    searchClicked: false,
    selectedType: "",
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
    },
});

export const searchSliceAction = searchSlice.actions;

export default searchSlice.reducer;
