import React from 'react'
import ProductCards from '../../products/ProductCard/ProductCards'
import ProductCategories from '../../products/ProductCategories/ProductCategories'
import ProductFilterPrice from '../../products/ProductFilterPrice/ProductFilterPrice'
import styled from 'styled-components'

const SearchResults = ({results}) => {

    const ContainerFilterCat = styled.div`
    display: flex;
    flex-direction: column;
    `
    const GeneralContainerProd = styled.div`
    display: flex;
    `

  return (
    <div>

<GeneralContainerProd>
    <ContainerFilterCat>
    <ProductCategories/>
    <ProductFilterPrice />
    </ContainerFilterCat>
    <ProductCards productos={results} /> 
  </GeneralContainerProd>

    </div>
  )
}

export default SearchResults