import React from 'react'


import styled from 'styled-components'

import ProductCards from './ProductCard/ProductCards'




const Products = () => {

  const MyH3 = styled.h3`
    letter-spacing: 20px;
  `

  return (
    <div>
   
      <ProductCards/> 
      </div>
  )
}

export default Products

