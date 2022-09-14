import axios from "axios";
import { Cocktail } from "../models/cocktails";
import { createSlice } from "@reduxjs/toolkit";

type Data = {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
};

type InitialValue = {
    loading: boolean;
    data: Cocktail[];
    error: string;
    dataToShow: Cocktail[];
    // dataShowLoad: Cocktail[];
    indexStart: number;
    indexEnd: number;
};

const initialValue: InitialValue = {
    loading: false,
    data: [],
    dataToShow: [],
    // dataShowLoad: [],
    indexStart: 0,
    indexEnd: 20,
    error: "",
};

export const fetchData = () => {
    return async (dispatch: any) => {
        // const sendRequest = async () => {
        const res = await axios.get(
            // "www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
            "http://localhost:4000/api/cocktails/category/cocktail"
        );
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
        // console.log(res.data);
    };
};

const dataSlice = createSlice({
    name: "data",
    initialState: initialValue,
    reducers: {
        getAllCocktail(state: any, action: any) {
            state.data = action.payload;
            // console.log(state.data);
        },
        getCocktailsToShow(state) {
            // console.log(state.data);
            state.dataToShow = state.data.slice(state.indexStart, state.indexEnd);
        },
        getMoreCocktails(state) {
            state.indexEnd = state.indexEnd + 20;
            state.dataToShow = state.data.slice(state.indexStart, state.indexEnd);
        },
    },

    // extraReducers(builder) {
    //     builder
    //         .addCase(fetchData.pending, (state, action) => {
    //             state.loading = true;
    //         })
    //         .addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
    //             state.loading = false;
    //             state.data = action.payload;
    //             state.error = "";
    //         })
    //         .addCase(fetchData.rejected, (state, action) => {
    //             state.loading = false;
    //             state.data = [];
    //             state.error = action.error.message || "something went wrong";
    //         });
    // },
});

export const dataSliceActions = dataSlice.actions;

export default dataSlice.reducer;

// export declare const useDispatch: <AppDispatch extends Dispatch<AnyAction> = Dispatch<AnyAction>>() => AppDispatch;
