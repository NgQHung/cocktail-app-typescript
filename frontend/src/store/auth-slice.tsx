import { createSlice } from "@reduxjs/toolkit";

interface InitialValue {
    token: string;
    email: string;
    userName: string;
}

const initialValue: InitialValue = {
    token: "",
    email: "",
    userName: "",
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialValue,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            // console.log(action.payload);
            localStorage.setItem("User", JSON.stringify(action.payload));
        },
        logout(state) {
            state.token = "";
            state.email = "";
            localStorage.removeItem("User");
        },
    },
});

export const authSliceActions = authSlice.actions;

export default authSlice.reducer;
