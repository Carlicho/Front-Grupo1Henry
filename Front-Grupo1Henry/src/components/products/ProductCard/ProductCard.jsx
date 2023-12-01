import React from 'react'
import styled from 'styled-components'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

const ProductCard = ({key, id, name, status, image, precio, descripcion, nombre}) => {
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


// console.log(productos, ' -> productos');




  return (
    <div>
        <CardContainer>
            <Link to="/productDetail">
            <CardImg  src={`${image}`}></CardImg>
            </Link>
            <Cardbody>
                <h2>
                    {
                        nombre
                    }
                </h2>
                <ProductDescription>
                    {
                        descripcion
                    }
                </ProductDescription>
                <ProductPrice>
                $
                {
                    precio
                }
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