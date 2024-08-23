// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, title, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
