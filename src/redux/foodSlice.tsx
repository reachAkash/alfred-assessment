import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartPrototype {
  item: string;
  image: string;
  price: string;
  description: string;
}

export interface RestrauntState {
  name: string;
  location: string;
  menu: any[];
}

export interface CartState {
  cart: CartPrototype[];
  currentItem: CartPrototype;
  currentRes: RestrauntState;
}

const initialState: CartState = {
  cart: [],
  currentItem: {
    item: "",
    image: "",
    price: "",
    description: "",
  },
  currentRes: {
    name: "",
    location: "",
    menu: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    currentRes: (state, action: PayloadAction<RestrauntState>) => {
      console.log(action.payload);
      state.currentRes = action.payload;
    },
    updateCurrentItem: (state, action: PayloadAction<CartPrototype>) => {
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

export const { currentRes, updateCurrentItem, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
