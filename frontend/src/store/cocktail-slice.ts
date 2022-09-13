import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { Cocktail } from "../models/cocktails";
import { Http } from "../models/Http";

const initialValue: any = {
    data: [],
    clickedCocktail: [],
    navigationClicked: false,
    cocktailsBasket: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
    total: 0,
    price: 0,
    cocktailsHeart: [],
    amountCocktailsHeart: 0,
};
interface Action {
    type?: any;
    payload?: any;
}

const cocktailSlice = createSlice({
    name: "dataState",
    initialState: initialValue,
    reducers: {
        fetCocktail(state: Http, action) {
            state.data = action.payload;
        },
        localStorageHandler(state, action) {
            state.cocktailsBasket = action.payload?.basket;
            state.cocktailsHeart = action.payload?.heart;
        },
        navigationHandler(state, action) {
            state.navigationClicked = action.payload;
            state.clickedCocktail = null;
        },
        clickedCocktailHandler(state, action) {
            state.clickedCocktail = action.payload;
        },
        addCocktail(state, action) {
            const idCocktail = action.payload.id;
            state.total = state.total + action.payload.price * action.payload.amount;
            // state.cocktailsBasket =
            // console.log(state.totalPrice);
            const existingCocktailIndex = state.cocktailsBasket.findIndex(
                (item: any) => item.id === idCocktail
            );
            const existingCocktail = state.cocktailsBasket[existingCocktailIndex];
            let updateCocktails;
            // var updatedLocalStorage = [];
            if (existingCocktail) {
                const updateCocktail = {
                    ...existingCocktail,
                    amount: existingCocktail.amount + action.payload.amount,
                    // totalPrice:
                    //     action.payload.price * existingCocktail.amount + action.payload.price,
                };
                // console.log()
                updateCocktails = [...state.cocktailsBasket];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktailsBasket = updateCocktails;

                // localStorage.setItem("Cart", state.cocktailsBasket);
            } else {
                state.cocktailsBasket = [...state.cocktailsBasket, action.payload];
                // localStorage.setItem("Cart", state.cocktailsBasket);
                // state.totalPrice = action.payload.price;
                // console.log(state.totalPrice);
            }
            localStorage.setItem("Cart", JSON.stringify(state.cocktailsBasket));
        },
        removeCocktail(state, action) {
            const existingCocktailIndex = state.cocktailsBasket.findIndex(
                (item: any) => item.id === action.payload
            );
            const existingCocktail = state.cocktailsBasket[existingCocktailIndex];
            let updateCocktails;
            if (existingCocktail.amount === 1) {
                updateCocktails = state.cocktailsBasket.filter(
                    (item: any) => item.id !== action.payload
                );
                state.cocktailsBasket = updateCocktails;
                // localStorage.setItem("Cart", JSON.stringify(state.cocktailsBasket));
            } else {
                const updateCocktail = {
                    ...existingCocktail,
                    amount: existingCocktail.amount - 1,
                    // totalPrice: existingCocktail.totalPrice - existingCocktail.price,
                };
                updateCocktails = [...state.cocktailsBasket];
                updateCocktails[existingCocktailIndex] = updateCocktail;
                state.cocktailsBasket = updateCocktails;
            }
            // console.log(updateCocktails);
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
