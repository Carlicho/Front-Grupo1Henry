import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'



const ProductCards = ({productos}) => {

    const ProductCardsContainer = styled.div`

        `;

  return (
    <ProductCardsContainer>
        <ProductCard productos={productos}/>
    </ProductCardsContainer>
  )
}

export default ProductCards