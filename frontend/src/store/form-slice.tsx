import { createSlice } from "@reduxjs/toolkit";
import { signupModel } from "../models/cocktails";

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

export const signupHandler = async (data: signupModel) => {
    let user;
    // return async (dispatch: any) => {
    // const sendRequest = async () => {
    const response: any = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ email: data.email, password: data.password }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const json = await response.json();
    // console.log(json);
    if (!response.ok) {
        throw new Error("Something went wrong");
    } else {
        user = JSON.stringify(json);
        // console.log("You are Signed up");
    }
    // };

    try {
        const data = await response();
    } catch (error) {
        console.log(error);
    }
    // };
};

export const formSliceActions = formSlice.actions;

export default formSlice.reducer;
