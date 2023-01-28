import React, { useState } from 'react'
import { totalItemQtySelector } from '../store/cart';
import Image from 'next/image';
import cartIcon from '../assets/cart.svg';
import Cart from './Cart';
import { useAppSelector } from '../store/store';
import { Checkout, Header, Logo } from '../styles/components/Header';

export default function Head() {

  const [ open, setOpen ] = useState<boolean>(false);
  const productQuantity = useAppSelector( totalItemQtySelector )

  return (
    <Header>
        <Logo>
            <h1>MKS</h1>
            <span className='secondary' >Sistemas</span>
        </Logo>

        <Checkout id='checkout' onClick={e => setOpen(!open)} >
            <Image src={cartIcon} alt='' />
            <span>
                { productQuantity }
            </span>
        </Checkout>

        <Cart open={open} close={ () => setOpen(false)} />
    </Header>
  )
}
