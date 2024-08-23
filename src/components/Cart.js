// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cart/cartSlice';
import { selectCartItems } from '../features/cart/cartSelectors';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-secondary btn-sm" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  {item.quantity}
                  <button className="btn btn-secondary btn-sm" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">Cart is empty</td>
            </tr>
          )}
        </tbody>
      </table>
      {cartItems.length > 0 && (
        <div>
          <h3>Total Quantity: {getTotalQuantity()}</h3>
          <h3>Total Amount: ${getTotalAmount()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
