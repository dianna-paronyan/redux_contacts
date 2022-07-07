import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../features";

export const store = configureStore({
    reducer: {
        contacts:contactReducer
    },
})