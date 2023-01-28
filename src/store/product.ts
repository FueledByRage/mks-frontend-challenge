import { IProduct } from "@/entities/product";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ProductsState {
    products: IProduct[] | null;
}

const initialState : ProductsState = {
    products : null
}

export const productSlice = createSlice({
    name: 'Products',
    initialState,
    reducers:{
        setProducts( state, action : PayloadAction<ProductsState> ){
            state.products = action.payload.products;
        }
    }
})

export default productSlice.reducer;

export const { setProducts } = productSlice.actions;

export const productsSliceName = productSlice.name;
export const productsReducer = productSlice.reducer;
export const selectProducts = (state: RootState) => state.products.products;