import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import ProductCategories from '../ProductCategories/ProductCategories';


const ProductCards = () => {

    const ProductCardsContainer = styled.div`
      display: flex;
      flex-direction: column;
    `;
    const ProductContainer = styled.div`
      display: flex;
    `;

  return (
    <ProductContainer>
      <ProductCategories />
        <ProductCardsContainer>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
      </ProductCardsContainer>
    </ProductContainer>
  )
}

export default ProductCards