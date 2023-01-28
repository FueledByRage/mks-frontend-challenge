import { ImgBoxSkeleton, ProductSkeleton, RowSkeleton } from '../styles/components/Skeleton'
import React from 'react'

export default function Skeleton() {
  return (
    <ProductSkeleton>
        <ImgBoxSkeleton />
        <RowSkeleton />
        <RowSkeleton />
        <RowSkeleton />
        <RowSkeleton />
    </ProductSkeleton>
  )
}
