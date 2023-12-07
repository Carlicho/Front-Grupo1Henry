import React, { useState } from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const ProductCards = ({ productos }) => {
  const [sortedProducts, setSortedProducts] = useState([...productos]);
  const [sortOrder, setSortOrder] = useState(null);

  const ProductCardsContainer = styled.div``;

  const handleSort = (order) => {
    let sortedArray = [];

    if (order === 'low') {
      sortedArray = [...productos].sort((a, b) => a.precio - b.precio);
    } else if (order === 'high') {
      sortedArray = [...productos].sort((a, b) => b.precio - a.precio);
    }

    setSortedProducts(sortedArray);
    setSortOrder(order);
  };

  return (
    <ProductCardsContainer>
      <div>
        <button onClick={() => handleSort('low')}>Sort by Low Price</button>
        <button onClick={() => handleSort('high')}>Sort by High Price</button>
      </div>

      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id_producto}
          id={product.id_producto}
          nombre={product.nombre}
          image={product.url_imagen}
          precio={product.precio}
          descripcion={product.descripcion}
        />
      ))}
    </ProductCardsContainer>
  );
};

export default ProductCards;