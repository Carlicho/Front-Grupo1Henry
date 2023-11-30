import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'



const ProductCards = ({productos}) => {

    const ProductCardsContainer = styled.div`

        `;
  console.log(typeof productos, '-> tipo');
  return (
    <ProductCardsContainer>
        {/* <ProductCard productos={productos}/> */}
        {productos.map((product)=>{
        return(
          <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}/>

        )
      })}
    </ProductCardsContainer>
  )
}

export default ProductCards