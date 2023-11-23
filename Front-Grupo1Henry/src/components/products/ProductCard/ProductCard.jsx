import React from 'react'
import styled from 'styled-components'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

const ProductCard = () => {
    const CardContainer = styled.div`

    display: flex;
    justify-content: end;
    margin: 10px 2px 8px 8px;
  `;

const CardImg = styled.img`
width: 12rem;
`;

const Cardbody = styled.div`
padding: 13px;

display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductDescription = styled.span`
text-align: left;
letter-spacing: 5px;
text-overflow: ellipsis;
color: #333;
font-size: 18px;
line-height: 22px;

`;

const ProductPrice = styled.div`
    font-size: 2rem;
    letter-spacing: 3px;


`;

const ProductshopcartContaier = styled.div`
display:flex;
justify-content:start;
align-items: center;
`;

const Productshopcart = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #fd611a;
cursor: pointer;
width: 18.3125rem;
height: 2.25rem;
border-radius: 4px;

`;

const ProductshopcartDescription = styled.span`
    font-size: 10px;
`







  return (
    <div>
        <CardContainer>

            <Link to="/productDetail">
            <CardImg  src='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_16752_Procesador_AMD_RYZEN_3_3200G_4.0GHz_Turbo___Radeon_Vega_8_AM4_Wraith_Stealth_Cooler_f414a507-grn.jpg'></CardImg>
            </Link>
            <Cardbody>
                <ProductDescription>
Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler
                </ProductDescription>
                <ProductPrice>
                $93.400
                </ProductPrice>
                <ProductshopcartContaier>
                <Productshopcart>
                    SUMAR AL CARRITO
                </Productshopcart>
                <TiShoppingCart size="3.24rem" />
                </ProductshopcartContaier>
            </Cardbody>
        </CardContainer>
    </div>
  )
}

export default ProductCard