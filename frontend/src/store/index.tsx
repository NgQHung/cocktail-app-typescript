import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authSlice from "./auth-slice";
import cocktailSlice from "./cocktail-slice";
import formSlice from "./form-slice";
import searchSlice from "./search-slice";
// ...

export const store = configureStore({
    reducer: {
        cocktailSlice: cocktailSlice,
        searchSlice: searchSlice,
        formSlice: formSlice,
        authSlice: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
applyMiddleware(thunk);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
