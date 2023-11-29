import React from 'react'


import styled from 'styled-components'

import ProductCards from './ProductCard/ProductCards'
import ProductCategories from './ProductCategories/ProductCategories'
import ProductFilterPrice from '../../components/products/ProductFilterPrice/ProductFilterPrice'
import ProductContainer from './ProductContainer'



const Products = ({productos}) => {
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
  
      <ProductCards productos={productos} /> 
    </GeneralContainerProd>
  )
}

export default Products

