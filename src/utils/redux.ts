import { useAppSelector } from "../store/store";
import { selectProducts } from '../store/product';
import { totalPrice } from "../store/cart";
import { ICartItem } from "../entities/cart";

export const useProducts = () =>{
    return useAppSelector( selectProducts );
}

export interface IUseCart{
    itens : ICartItem[],
    price : number
}


export const useCart = () : IUseCart =>{
    const itens = useAppSelector( state => state.cart.state )
    const price = useAppSelector( totalPrice );
    return {
        itens,
        price
    }
}

export const getCartItens = ()=>{
    const itens = useAppSelector( state => state.cart.state )
    return itens;
}

