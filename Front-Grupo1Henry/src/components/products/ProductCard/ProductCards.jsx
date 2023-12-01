import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'



const ProductCards = ({productos}) => {

    const ProductCardsContainer = styled.div`

        `;
  console.log(typeof productos, '-> tipo');
  return (
    <ProductCardsContainer>
        {productos.map((product)=>{
        return(
          <ProductCard
          key={product.id_producto}
          id={product.id_producto}
          nombre={product.nombre}
          image={product.url_imagen}
          precio={product.precio}
          descripcion={product.descripcion}
          />
          
        )
      })}
    </ProductCardsContainer>
  )
}

export default ProductCards