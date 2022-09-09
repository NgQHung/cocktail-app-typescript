import { createSlice } from "@reduxjs/toolkit";

interface InitialValue {
    formInput: [];
}

const initialValue: InitialValue = {
    formInput: [],
};

const formSlice = createSlice({
    name: "input",
    initialState: initialValue,
    reducers: {
        formHandler(state, action) {
            state.formInput = action.payload;
            // console.log(state.formInput);
        },
    },
});

export const formSliceActions = formSlice.actions;

export default formSlice.reducer;
