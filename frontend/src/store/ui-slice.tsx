import { createSlice } from "@reduxjs/toolkit";
import { Cocktail } from "../models/cocktails";
// import { Http } from "../models/Http";

const initialValue: any = {
    loading: false,
};
interface Action {
    type?: any;
    payload?: any;
}

const UISlice = createSlice({
    name: "notification",
    initialState: initialValue,
    reducers: {
        loadingHandler(state, action) {
            state.loading = action.payload;
        },
    },
});

export const UISliceActions = UISlice.actions;

export default UISlice.reducer;
