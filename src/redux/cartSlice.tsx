import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartPrototype {
  item: string;
  image: string;
  price: string;
  description: string;
}

export interface CartState {
  cart: CartPrototype[];
  currentItem: CartPrototype;
}

const initialState: CartState = {
  cart: [],
  currentItem: {
    item: "",
    image: "",
    price: "",
    description: "",
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCurrentItem: (state, action: PayloadAction<CartPrototype>) => {
      // if(action.payload.item || action.payload.image || action.payload.price || action.payload.quantity){
      // }
      state.currentItem = action.payload;
    },
    addToCart: (state, action: PayloadAction<CartPrototype>) => {
      const item = action.payload;
      state.cart.push(item);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.item !== action.payload);
    },
  },
});

export const { updateCurrentItem, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
