import { getPrice } from '../../utils/componentsAuxiliar';
import React from 'react'
import { ICartItem } from '../../entities/cart';
import { CartItemContainer, QuantityButton, RemoveCartItem } from '../../styles/components/cartItem';
import { useAppDispatch  } from '../../store/store';
import { decrementItem, incrementItem, removeFromCart } from '../../store/cart';
interface IProps {
  item : ICartItem,
  index : number
}

export default function CartItem( { item, index } : IProps ) {

  const dispatch = useAppDispatch();


  const decrement = () =>{
    if( item.quantity == 1 ) return;

    decrementCartItemQuantity( index )
  }

  const incrementCartItemQuantity = ( index : number )=>{
    dispatch( incrementItem({ index }) )
}

  const decrementCartItemQuantity = ( index : number )=>{
      if(item.quantity == 1) return;
      dispatch( decrementItem({ index }))
  }

  const removeElementFromCart = ( item : ICartItem, index : number ) =>{
      dispatch( removeFromCart({ item, index }) )
  }

  return(
    <>
      <CartItemContainer id={`cart-item-${item.product.id}`} >
        <RemoveCartItem onClick={ e => removeElementFromCart( item, index ) } >x</RemoveCartItem>
        <img className='productImg' src={ item.product.photo } alt='' />
        <span> { item.product.name } </span>
        <QuantityButton>
          <span onClick={ e=> decrement() }>-</span>
          <span> { item.quantity } </span>
          <span onClick={e => incrementCartItemQuantity(index)}>+</span>
        </QuantityButton>
        <span>R$ { getPrice(item.product.price) } </span>
        <div></div>
      </CartItemContainer>
    
    </>
  )
}
