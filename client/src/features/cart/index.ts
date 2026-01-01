import { createSlice } from "@reduxjs/toolkit";
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
interface Cart {
  items: CartItem[];
  total: number;
  shippingCost: number;
  vat: number;
}
const initialState: Cart = {
  items: [],
  total: 0,
  shippingCost: 50,
  vat: 20,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: { type: string; payload: CartItem }) {
      const product = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === product.id,
      );
      let quantity = product.quantity;
      if (product.quantity > 3) {
        quantity = 3;
      } else if (product.quantity < 1) {
        quantity = 1;
      }
      if (existingItemIndex === -1) {
        state.items.push({ ...product, quantity: quantity });
        state.total += product.price * quantity;
      } else {
        state.total -=
          state.items[existingItemIndex].price *
          state.items[existingItemIndex].quantity;
        state.total += product.price * quantity;
        state.items[existingItemIndex].quantity = quantity;
      }
    },

    removeItem(state, action: { type: string; payload: string }) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemId,
      );
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        state.total -= existingItem.price * existingItem.quantity;
        state.items.splice(existingItemIndex, 1);
      }
    },

    increaseQuantity(state, action: { type: string; payload: string }) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (!existingItem) return;
      existingItem.quantity =
        existingItem.quantity < 3 ? existingItem.quantity + 1 : 3;
    },

    decreaseQuantity(state, action: { type: string; payload: string }) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (!existingItem) return;
      existingItem.quantity =
        existingItem.quantity > 1 ? existingItem.quantity - 1 : 1;
    },

    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
