import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import ProductCategories from '../ProductCategories/ProductCategories';
import ProductFilterPrice from '../ProductFilterPrice/ProductFilterPrice';


const ProductCards = () => {

    const ProductCardsContainer = styled.div`
      display: flex;
      flex-direction: column;
    `;
    const ProductContainer = styled.div`
      display: flex;
    `;
    const ContainerOptionsProducts = styled.div`
    
    `;

  return (
    <ProductContainer>
      <ContainerOptionsProducts>
        <ProductCategories />
        <ProductFilterPrice />
      </ContainerOptionsProducts>
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