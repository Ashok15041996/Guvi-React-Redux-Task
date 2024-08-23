// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
