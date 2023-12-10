import React from 'react'
import styled from 'styled-components'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({key, id, name, status, image, precio, descripcion, nombre}) => {
    const CardContainer = styled.div`
    background-color: #ffff;
    border-right: 2px solid #000000;
    border-top: 2px solid #000000;
    border-bottom:  1px solid#000000;
    border-radius: 0px 31px 0px 0px;
    box-shadow: -2px 2px 2px -2px rgba(0,0,0,0.75) inset;
    -webkit-box-shadow: -3px 3px 3px -3px rgba(0,0,0,0.75) inset;
    -moz-box-shadow: -2px 1px 2px -1px rgba(0,0,0,0.75) inset;
    display: flex;
    justify-content: end;
    margin: 20px 2px 20px 8px;
    max-width: 1000px;
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
background-color: #2165f7;
color: #ffff;
cursor: pointer;
width: 18.3125rem;
height: 2.25rem;
border-radius: 4px;

`;

const ProductshopcartDescription = styled.span`
    font-size: 10px;
`


//Function MercadoPago

const Mercadopago = () => {
    const url = 'http://localhost:3001/pagos';
const data = {
  id: id,
  nombre: nombre,
  precio:  precio,
  cantidad: 1
};

axios.post(url, data)
  .then(response => {
    const paymentLink = response.data.paymentLink;
    console.log('Respuesta del servidor:', response.data);

    setTimeout(() => {
        window.open(response.data, '_blank');
      }, 150);
  })
  .catch(error => {
    console.log(error);});
}




  return (
    <div>
        <CardContainer>
            <Link to={`/productdetail/${id}`}>
            <CardImg  src={`${image}`}></CardImg>
            </Link>
            <Cardbody>
            <Link to={`/productdetail/${id}`}>
                <h2>
                    {
                        nombre
                    }
                </h2>
                </Link >
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
                <Productshopcart onClick={Mercadopago}>
                    Comprar
                </Productshopcart>
                <TiShoppingCart size="3.24rem" />
                </ProductshopcartContaier>
            </Cardbody>
        </CardContainer>
    </div>
  )
}

export default ProductCard