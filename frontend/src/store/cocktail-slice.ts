import { createSlice } from "@reduxjs/toolkit";
import { Http } from "../models/Http";

const initialValue: any = {
    data: [],
    cocktailSelected: [],
    cocktailsBasket: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
    total: 0,
    price: 0,
    cocktailsHeart: [],
    amountCocktailsHeart: 0,
    addedCocktails: [],
    addedCocktailDetail: {},
    addedCocktailEdit: {},
};

const cocktailSlice = createSlice({
    name: "dataState",
    initialState: initialValue,
    reducers: {
        fetCocktail(state: Http, action) {
            state.data = action.payload;
        },
        addedCocktailHandler(state, action) {
            state.addedCocktails = action.payload;
        },
        addedCocktailDetailHandler(state, action) {
            state.addedCocktailDetail = action.payload;
        },
        addedCocktailEditHandler(state, action) {
            state.addedCocktailEdit = action.payload;
        },
        localStorageHandler(state, action) {
            console.log(action.payload.basket);
            state.total = action.payload?.total;
            state.cocktailsBasket = action.payload?.basket;
            state.cocktailsHeart = action.payload?.heart;
        },
        viewCocktailHandler(state, action) {
            state.cocktailSelected = action.payload;
        },
        addCocktail(state, action) {
            const idCocktail = action.payload.id;
            state.total = state.total + action.payload.price * action.payload.amount;
            const existingCocktailIndex = state.cocktailsBasket.findIndex(
                (item: any) => item.id === idCocktail
            );
            const existingCocktail = state.cocktailsBasket[existingCocktailIndex];
            let updateCocktails;
            if (existingCocktail) {
                const updateCocktail = {
                    ...existingCocktail,
                    amount: existingCocktail.amount + action.payload.amount,
                    // totalPrice:
                    //     action.payload.price * existingCocktail.amount + action.payload.price,
                };
                updateCocktails = [...state.cocktailsBasket];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktailsBasket = updateCocktails;
            } else {
                state.cocktailsBasket = [...state.cocktailsBasket, action.payload];
            }
            localStorage.setItem("Total", JSON.stringify(state.total));

            localStorage.setItem("Cart", JSON.stringify(state.cocktailsBasket));
        },
        removeCocktail(state, action) {
            const existingCocktailIndex = state.cocktailsBasket.findIndex(
                (item: any) => item.id === action.payload.id
            );
            // console.log(action.payload.price);
            state.total = state.total - action.payload.price;
            const existingCocktail = state.cocktailsBasket[existingCocktailIndex];
            let updateCocktails;
            if (existingCocktail.amount === 1) {
                updateCocktails = state.cocktailsBasket.filter(
                    (item: any) => item.id !== action.payload.id
                );
                state.cocktailsBasket = updateCocktails;
            } else {
                const updateCocktail = {
                    ...existingCocktail,
                    amount: existingCocktail.amount - 1,
                    // totalPrice: existingCocktail.total - existingCocktail.price,
                };
                updateCocktails = [...state.cocktailsBasket];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktailsBasket = updateCocktails;
            }
            // console.log(updateCocktails);
            localStorage.setItem("Total", JSON.stringify(state.total));

            localStorage.setItem("Cart", JSON.stringify(state.cocktailsBasket));
        },
        heartHandler(state, action) {
            const idCocktail = action.payload.id;
            const existingCocktailIndex = state.cocktailsHeart.findIndex(
                (item: any) => item.id === idCocktail
            );
            const existingCocktail = state.cocktailsHeart[existingCocktailIndex];
            // var arr = []
            let updateCocktails;
            if (existingCocktail) {
                const updateCocktail = {
                    ...existingCocktail,
                };
                updateCocktails = [...state.cocktailsHeart];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktailsHeart = updateCocktails;
            } else {
                state.cocktailsHeart = [...state.cocktailsHeart, action.payload];
            }
            localStorage.setItem("Heart", JSON.stringify(state.cocktailsHeart));
        },
        removeCocktailHeart(state, action) {
            let updateCocktails;
            updateCocktails = state.cocktailsHeart.filter(
                (item: any) => item.id !== action.payload
            );
            state.cocktailsHeart = updateCocktails;
            localStorage.setItem("Heart", JSON.stringify(state.cocktailsHeart));
        },
    },
});

export const cocktailSliceAction = cocktailSlice.actions;

export default cocktailSlice.reducer;
