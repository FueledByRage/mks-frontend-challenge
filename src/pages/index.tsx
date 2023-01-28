import Product from '../components/product';
import {  setProducts } from '../store/product';
import { ErrorFeedback } from '../styles/components/ErrorFeedback';
import { HomePageContainer, HomePageMain, ProductsList } from '../styles/pages/ProductsPage';
import { fetchProducts } from '../utils/fetchProducts';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useProducts } from '../utils/redux';
import Skeleton from '../components/skeleton';
import { CustomSelect, SelectRow } from '../styles/components/select';

export default function HomePage() {

  const dispatch = useDispatch();
  const products = useProducts();
  const [ hasError, setError ] = useState<boolean>(false);
  const [ perPage, setPerPage ] = useState<string>('5');
  let registerCount = 8;
  const minimum = 4;

  const skeletonMockArray = Array.from({ length: Number(perPage) }, (_, i) => i);
  const registerCountOption = Array.from({ length: (registerCount) }, (_, i) => i + 1).slice(minimum);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const { products, count } = await fetchProducts(perPage);
                registerCount = (count + 1 ) || 9;
                dispatch( setProducts({ products }));
            } catch (error) {
                console.error(error);
                setError(true);
            }
        }
        fetchData();
    },[ dispatch, perPage ])

  return (
    <>
        <HomePageContainer>
            <HomePageMain>
                {
                    hasError ? <ErrorFeedback> <span>Algo deu errado na busca de produtos</span> </ErrorFeedback> :
                     <>
                      <ProductsList>
                          {
                              products ? products.map( product =>  <Product  key={product.id} product={product} />) :
                              skeletonMockArray.map(( _, index) => <Skeleton key={index} /> )
                          }
                      </ProductsList>
                      <SelectRow>
                        <span>Número de registros</span>
                        <CustomSelect onChange={ e => setPerPage(e.target.value)} >
                          {
                            registerCountOption.map(( opt, index ) => <option key={index} value={`${opt}`} >{ opt }</option> )
                          }
                        </CustomSelect>
                      </SelectRow>
                     </>

                }
            </HomePageMain>
        </HomePageContainer>
    </>
  )
}
