import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //slice
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
