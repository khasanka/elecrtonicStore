import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./action";

const initialState = {
    products: [],
    status: "idel",
    error: ""
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      filterProducts : (state, action)=> {
        const filterData = action.payload.products.filter((ele) => {
          // console.log("element =>",ele);
          // console.log("action.payload.selectedCategory =>",action.payload.selectedCategory);

          return ele.categoryId == action.payload.selectedCategory.categoryId
        });
        state.products = filterData;
      }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getProducts.pending, (state, action) => {
            state.status = "Loading...";
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.status = "success"; 
            state.products = action.payload;
            state.error = ""; 
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.status = "failed"; 
            state.error = action.error.message;
          });
      }
});

export const {filterProducts} = productSlice.actions;
export default productSlice.reducer;