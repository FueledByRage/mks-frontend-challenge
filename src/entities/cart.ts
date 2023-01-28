import { IProduct } from "./product";

export interface ICartItem { 
    product : IProduct,
    quantity : number,
}

export interface ICart {
    state : ICartItem[],
    priceAmount : number
}