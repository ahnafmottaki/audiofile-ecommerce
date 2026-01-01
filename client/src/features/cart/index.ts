import { createSlice } from "@reduxjs/toolkit";
interface CartItem {
  id: number;
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
const initialState: Cart = (localStorage.getItem("cart") &&
  JSON.parse(localStorage.getItem("cart")!)) || {
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

    removeItem(state, action: { type: string; payload: number }) {
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

    increaseQuantity(state, action: { type: string; payload: number }) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (!existingItem) return;
      const existingQuantity = existingItem.quantity;
      existingItem.quantity = existingQuantity < 3 ? existingQuantity + 1 : 3;
      if (existingQuantity !== 3) {
        state.total += existingItem.price;
      }
    },

    decreaseQuantity(state, action: { type: string; payload: number }) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (existingItemIndex === -1) return;
      const existingItem = state.items[existingItemIndex];
      const existingQuantity = existingItem.quantity;
      if (existingQuantity === 1) {
        state.total -= existingItem.price * existingQuantity;
        state.items.splice(existingItemIndex, 1);
      } else {
        existingItem.quantity = existingQuantity - 1;
        state.total -= existingItem.price;
      }
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
