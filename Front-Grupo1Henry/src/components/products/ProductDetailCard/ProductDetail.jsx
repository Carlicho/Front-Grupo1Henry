import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import styled from 'styled-components'

const ProductDetail = () => {

  const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1860px;
  height: 40r;
  `

const ImgDetailContainer = styled.img`

width:  456px;
height: 408px;
`

const DetailDescriptionContainer = styled.h1`
display: flex;
flex-direction:column;
justify-content: space-evenly;
width: 546px;
height: 408px;
font-size:24px;
`

const DetailDescription = styled.div`
width: 486px;
height: 96px;
margin: 0 20px;
`

const DetailPrice = styled.div`
width: max-content;
height: 40px;
margin: 0 20px;
font-size: 32px;
`
const SumarCarritoBox = styled.div`
  display: flex;
`

const SumarCarrito = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #fd611a;
border-radius: 6px;
width: 280px;
padding: 0 16px;
height: 40px;
margin: 0 20px;
color: #fff;
`

  return (
    <DetailContainer>
      <ImgDetailContainer src='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_16752_Procesador_AMD_RYZEN_3_3200G_4.0GHz_Turbo___Radeon_Vega_8_AM4_Wraith_Stealth_Cooler_f414a507-grn.jpg' />
      
      <DetailDescriptionContainer>

      <DetailDescription>Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler</DetailDescription>
      
      <DetailPrice>$ 102.750</DetailPrice>

      <SumarCarritoBox >
      <SumarCarrito>Sumar al carrito</SumarCarrito>
      <TiShoppingCart  size="3.24rem" />
      </SumarCarritoBox>


      </DetailDescriptionContainer>

      </DetailContainer>


  )
}

export default ProductDetail