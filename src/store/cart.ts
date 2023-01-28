import { ICart, ICartItem } from "@/entities/cart";
import { createSelector, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IRemovePayload{
    item : ICartItem,
    index : number
}

interface IChangeItem{
    index : number
}

const initialState : ICart = {
    state: [],
    priceAmount : 0
}




export const CartState = createSlice({
    name : 'Cart',
    initialState,
    reducers:{
        addToCart : ( state, action : PayloadAction<ICartItem> ) =>{
            state.state.push( action.payload );
            state.priceAmount += Number(action.payload.product.price);
        },
        removeFromCart : ( state, action : PayloadAction<IRemovePayload> ) =>{
            const { index } = action.payload; 
            const { item } = action.payload;
            state.state = [ ...state.state.slice(0, index), ...state.state.slice(index + 1)]
            state.priceAmount -= Number(item.product.price) * item.quantity;
        },
        incrementItem : ( state, action : PayloadAction<IChangeItem> ) =>{
            const { index } = action.payload; 
            if(!state.state[index]) return;
            state.state[index].quantity += 1; 
            
            const price = state.state[index].product.price;
            state.priceAmount += Number(price);
        },
        decrementItem : ( state, action : PayloadAction<IChangeItem>  ) =>{
            const { index } = action.payload; 
            if( !state.state[index] || state.state[index].quantity == 0) return
            state.state[index].quantity -= 1;
            state.priceAmount -= Number(state.state[index].product.price)
        }
    }
})

export default CartState.reducer;
export const { addToCart, removeFromCart, incrementItem, decrementItem } = CartState.actions;

const items = (state : RootState) => state.cart.state;
const price = (state : RootState) => state.cart.priceAmount;

export const totalItemQtySelector = createSelector([items], (items) => {
  
    return items.reduce(
      (total: number, item: ICartItem) => (total += item.quantity),
      0,
    );
  });

export const elementIsOnCart = ( id : number) => createSelector( [ items ], items => {
    const found = items.find( item => item.product.id === id );
    if(found) return true;

    return false;
} );

export const totalPrice = createSelector( [ price ] , price => price);

export const cartReducer = CartState.reducer;