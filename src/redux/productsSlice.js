// productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    productsCopy: [],
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
      state.productsCopy = action.payload;
    },
    updateProductsCopy: (state, action) => {
      state.productsCopy = action.payload;
    },
    sortProducts: (state, action) => {
      const sortedProducts = [...state.productsCopy].sort((a, b) => {
        return action.payload === "asc" ? a.price - b.price : b.price - a.price;
      });
      state.productsCopy = sortedProducts;
    },
    filterByCategory: (state, action) => {
      const filteredByCategory = state.allProducts.filter((produc) => {
        return action.payload.includes(produc.category);
      });
      state.productsCopy =
        action.payload.length > 0 ? filteredByCategory : state.allProducts;
    },
    searchProducts: (state, action) => {
      const searchedProducts = state.allProducts.filter((produc) => {
        return (
          produc.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          produc.description
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        );
      });
      state.productsCopy = searchedProducts
        ? searchedProducts
        : state.allProducts;
    },
  },
});

export const {
  setAllProducts,
  updateProductsCopy,
  sortProducts,
  filterByCategory,
  searchProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
