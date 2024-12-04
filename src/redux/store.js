// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./usersSlice";
import productReduder from "./productsSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    users: userReduce,
    products: productReduder,
    cart: cartReducer,
  },
});

export default store;
