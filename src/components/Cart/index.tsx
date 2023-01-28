import React from 'react';
import CartItem from './CartItem';
import { getPrice } from '../../utils/componentsAuxiliar';
import { useCart } from '../../utils/redux';
import { CartHead, CartItens, CloseCart, Details, FinishOrder, OrderDetails } from '../../styles/components/cart';

interface IProps{
    open: boolean,
    close : () => void
}

export default function Cart( { open, close } : IProps ) {

  const { price, itens } = useCart();

  return (
    <div id={`cartList ${open}`} className={`cartList ${open}`}>
    <CartHead> 
      <span>
        Carrinho <br /> de compras 
      </span>
      <CloseCart onClick={ e => close() } >
        X
      </CloseCart>

    </CartHead>
    <CartItens>
      {
        itens.map( (item, index ) => <CartItem key={item.product.id} item={item} index={index} /> )
      }
    </CartItens>

    <OrderDetails>
      <Details>
        <span>Total:</span>
        <span> R$ { getPrice( price.toString() ) } </span>
      </Details>
      <FinishOrder>Finalizar Compra</FinishOrder>
    </OrderDetails>
</div>
  )
}
