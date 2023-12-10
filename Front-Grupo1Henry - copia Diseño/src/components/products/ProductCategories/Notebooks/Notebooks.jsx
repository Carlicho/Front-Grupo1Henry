
import ProductCards from '../../ProductCard/ProductCards'
import ProductCategories from '../../ProductCategories/ProductCategories'
import ProductFilterPrice from '../../ProductFilterPrice/ProductFilterPrice'
import styled from 'styled-components'

const Notebooks = ({productos}) => {

    
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
    <ProductCards productos={productos} /> 
  </GeneralContainerProd>
  
  </div>
  )
}

export default Notebooks