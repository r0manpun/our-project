import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex((product) => product.id === productId);
      const productToRemove = state.products[productIndex];
      if (productToRemove) {
        state.quantity-= productToRemove.quantity;
        state.total -= productToRemove.price * productToRemove.quantity;
        state.products.splice(productIndex, 1);
      }
    },
    
    resetCart:(state)=>{
      state.products = [];
      state.quantity = 0;
      state.total =0;
    }
  },
});

export const { addProduct, resetCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
