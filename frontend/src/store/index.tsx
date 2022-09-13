import { configureStore, applyMiddleware, Dispatch, AnyAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authSlice from "./auth-slice";
import cocktailSlice from "./cocktail-slice";
import formSlice from "./form-slice";
import searchSlice from "./search-slice";
import notificationSlice from "./notification-slice";
import dataSlice from "./slice-http";
import logger from "redux-logger";
import uiSlice from "./ui-slice";
// ...

export const store = configureStore({
    reducer: {
        cocktailSlice: cocktailSlice,
        searchSlice: searchSlice,
        formSlice: formSlice,
        authSlice: authSlice,
        notificationSlice: notificationSlice,
        dataSlice: dataSlice,
        UISlice: uiSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    // [thunkMiddleware]
});
applyMiddleware(thunk);

export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// export declare const useDispatch: <
//     AppDispatch extends Dispatch<AnyAction> = Dispatch<AnyAction>
// >() => AppDispatch;

export default store;
