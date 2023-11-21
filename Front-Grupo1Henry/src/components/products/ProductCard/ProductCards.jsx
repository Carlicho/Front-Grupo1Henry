import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'



const ProductCards = () => {

    const ProductCardsContainer = styled.div`

        `;

  return (
    <ProductCardsContainer>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </ProductCardsContainer>
  )
}

export default ProductCards