import React from 'react'
import BuyIcon from '../assets/shopping-bag.svg';
import Image from 'next/image'
import { addToCart, elementIsOnCart } from '../store/cart';
import { useAppDispatch, useAppSelector } from '../store/store'
import { getPrice } from '../utils/componentsAuxiliar';
import { AboutProduct, BuyButton, Details, ImgBox, Price, ProductCard, ProductDetails } from '../styles/components/product';
import { IProduct } from '../entities/product';


interface IProps {
    product : IProduct
  }

export default function Product( { product } : IProps ) {
    const dispatch = useAppDispatch();
    const isOnCart = useAppSelector( elementIsOnCart(product.id));

    

  return (
    <ProductCard id={`product-${product.id}`} >
        <ImgBox>
            <img 
            src={product.photo} alt="" className="product-img" />
        </ImgBox>
        <Details>
            <ProductDetails>
                <span>{ product.name }</span>
            </ProductDetails>
            <Price>
                <span>
                    R${getPrice(product.price)}
                </span>
            </Price>
        </Details>
        <AboutProduct>
            <span>
                { product.description }
            </span>
        </AboutProduct>
        <BuyButton disabled={isOnCart} onClick={e => dispatch(addToCart({ product, quantity : 1 })) }>
            <Image src={BuyIcon} alt="" />
            <span>
                {
                    isOnCart ? 'Item adcionado' : 'Comprar'
                }
            </span>
        </BuyButton>
    </ProductCard>
  )
}
