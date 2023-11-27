import React from 'react'


import styled from 'styled-components'

import ProductCards from './ProductCard/ProductCards'
import ProductCategories from './ProductCategories/ProductCategories'
import ProductFilterPrice from '../../components/products/ProductFilterPrice/ProductFilterPrice'
import ProductContainer from './ProductContainer'



const Products = () => {
  const ContainerFilterCat = styled.div`
  display: flex;
  flex-direction: column;
  `
  const GeneralContainerProd = styled.div`
  display: flex;
  `

  return (
    <GeneralContainerProd>
      <ContainerFilterCat>
        <ProductCategories/>
        <ProductFilterPrice />
      </ContainerFilterCat>
      <ProductCards/> 
    </GeneralContainerProd>
  )
}

export default Products

