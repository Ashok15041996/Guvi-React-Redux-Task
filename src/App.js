// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      price: 549,
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    },
    {
      id: 2,
      title: "iPhone X",
      price: 899,
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      price: 1249,
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg"
    },
    {
      id: 4,
      title: "OPPOF19",
      price: 280,
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    },
    {
      id: 5,
      title: "Huawei P30",
      price: 499,
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
    }
  ];

  return (
    <div className="App">
      <ProductList products={products} />
      <Cart />
    </div>
  );
};

export default App;
