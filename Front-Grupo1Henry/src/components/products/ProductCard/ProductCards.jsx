import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'



const ProductCards = () => {

    const ProductCardsContainer = styled.div`
      display: flex;
      flex-direction: column;
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