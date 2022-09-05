import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import cocktailSlice from "./cocktail-slice";
// import logger from "redux-logger";
// ...

export const store = configureStore({
    reducer: {
        cocktailSlice: cocktailSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
applyMiddleware(thunk);

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
