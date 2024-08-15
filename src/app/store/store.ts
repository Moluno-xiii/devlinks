import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/authSlice";
import linkSlice from "./linkSlice/linkSlice";

export const store = configureStore({
    reducer : {
        auth : authSlice,
        link : linkSlice
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch