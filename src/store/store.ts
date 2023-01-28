import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CartState } from "./cart";
import product, { productSlice } from "./product";



export const store = configureStore({
    reducer:{
        cart : CartState.reducer,
        products : productSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
