import axios from "axios";
import { Cocktail } from "../models/cocktails";
import { createSlice } from "@reduxjs/toolkit";

type InitialValue = {
    loading: boolean;
    data: Cocktail[];
    error: string;
    dataToShow: Cocktail[];
    indexStart: number;
    indexEnd: number;
    typeCocktail: string;
};

const initialValue: InitialValue = {
    loading: false,
    data: [],
    dataToShow: [],
    indexStart: 0,
    indexEnd: 20,
    error: "",
    typeCocktail: "",
};

const uriBase = {
    server: "https://cocktail-be.onrender.com",
};

export const fetchDataToShow = () => {
    return async (dispatch: any) => {
        const res = await axios.get(`${uriBase.server}/api/cocktails/category/cocktail`);
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
    };
};
export const fetchOrdinaryCocktail = () => {
    return async (dispatch: any) => {
        const res = await axios.get(`${uriBase.server}/api/cocktails/category/ordinary-drink`);
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
    };
};
export const fetchCocktailGlass = () => {
    return async (dispatch: any) => {
        const res = await axios.get(`${uriBase.server}/api/cocktails/glass/cocktail-glass`);
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
    };
};
export const fetchChampagneFlute = () => {
    return async (dispatch: any) => {
        const res = await axios.get(`${uriBase.server}/api/cocktails/glass/champagne-flute`);
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
    };
};
export const fetchIngredientGin = () => {
    return async (dispatch: any) => {
        const res = await axios.get(`${uriBase.server}/api/cocktails/ingredient/gin`);
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
    };
};
export const fetchIngredientVodka = () => {
    return async (dispatch: any) => {
        const res = await axios.get(`${uriBase.server}/api/cocktails/ingredient/vodka`);
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
    };
};
export const fetchAlcoholic = () => {
    return async (dispatch: any) => {
        const res = await axios.get(`${uriBase.server}/api/cocktails/alcoholic/alcoholic`);
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
    };
};
export const fetchNonAlcoholic = () => {
    return async (dispatch: any) => {
        const res = await axios.get(`${uriBase.server}/api/cocktails/alcoholic/non-alcoholic`);
        dispatch(dataSliceActions.getAllCocktail(res.data.data));
    };
};

// export const postDataToUser = async (id: string, data: any) => {
//     await fetch(`http://localhost:4000/users/${id}/shopping-cart`, {
//         method: "POST",
//         body: JSON.stringify({
//             id: id,
//             data: data,
//         }),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     // dispatch(dataSliceActions.getAllCocktail(res.data.data));
// };

const dataSlice = createSlice({
    name: "data",
    initialState: initialValue,
    reducers: {
        getAllCocktail(state, action) {
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
        typeCocktailHandler(state, action) {
            state.typeCocktail = action.payload;
            // console.log(action.payload);
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
