import { createSlice } from "@reduxjs/toolkit";

const initialValue: any = {
    alertAdded: false,
    alertRemoved: false,
    alertError: false,
    alertContent: null,
};
// interface Action {
//     type?: any;
//     payload?: any;
// }

const notificationSlice = createSlice({
    name: "notification",
    initialState: initialValue,
    reducers: {
        alertHandlerAdded(state, action) {
            state.alertAdded = action.payload;
            // state.alertContent = action.payload
        },
        alertHandlerRemove(state, action) {
            state.alertRemoved = action.payload;
        },
        alertErrorHandler(state, action) {
            state.alertError = action.payload;
        },
        alertHandler(state, action) {
            state.alertContent = action.payload;
            // console.log()
            // state
        },
    },
});

export const notificationSliceActions = notificationSlice.actions;

export default notificationSlice.reducer;
