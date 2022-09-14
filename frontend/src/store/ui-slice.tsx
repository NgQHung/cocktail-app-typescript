import { createSlice } from "@reduxjs/toolkit";

const initialValue: any = {
    loading: false,
    searchClicked: false,
};
// interface Action {
//     type?: any;
//     payload?: any;
// }

const UISlice = createSlice({
    name: "notification",
    initialState: initialValue,
    reducers: {
        loadingHandler(state, action) {
            state.loading = action.payload;
        },
        searchHandler(state) {
            state.searchClicked = !state.searchClicked;
        },
    },
});

export const UISliceActions = UISlice.actions;

export default UISlice.reducer;
