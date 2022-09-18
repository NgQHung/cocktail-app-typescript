import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { signupModel } from "../models/cocktails";
// import { notificationSliceActions } from "./notification-slice";

interface InitialValue {
    formInput: [];
    addedCocktail: {};
}

const initialValue: InitialValue = {
    formInput: [],
    addedCocktail: {},
};
interface TypeCreatedCocktail {
    name: string;
    type: string;
    price: number | string;
    addressImageInput: string;
}

const formSlice = createSlice({
    name: "input",
    initialState: initialValue,
    reducers: {
        formHandler(state, action) {
            state.formInput = action.payload;
            // console.log(state.formInput);
        },
        createCocktail(state, action) {
            state.addedCocktail = action.payload;
            // console.log(state.addedCocktail);
        },
    },
});

// export const createCocktail = async (data: TypeCreatedCocktail) => {
// return async (dispatch: any) => {
// const { name, type, price, addressImageInput } = data;
// const res = await axios.post("http://localhost:4000/api/my-data/create-cocktail", {
//     name: name,
//     type: type,
//     price: price,
//     addressImage: addressImageInput,
// });
// console.log(res.data.data);
// if (res.data.data === null) {
//     dispatch(
//         notificationSliceActions.alertHandler({
//             title: "Error!",
//             description: res.data.error.msg,
//             type: "error",
//         })
//     );
// }

// try {
//     console.log("hello?");
// } catch (error) {
//     console.log(error);
// }
// };
// };
// };

export const signupHandler = async (data: signupModel) => {
    const response: any = await fetch("http://localhost:4000/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ email: data.email, password: data.password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Something went wrong");
    }

    try {
        await response();
    } catch (error) {
        console.log(error);
    }
    // };
};

export const formSliceActions = formSlice.actions;

export default formSlice.reducer;
