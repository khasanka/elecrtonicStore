import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initialState = {
    categories: [],
    status: "ïdel",
    error:""
};

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(getCategories.pending, (state, action) => {
            state.status = "Loading...";
          })
          .addCase(getCategories.fulfilled, (state, action) => {
            state.status = "success"; 
            state.categories = action.payload;
            state.error = ""; 
          })
          .addCase(getCategories.rejected, (state, action) => {
            state.status = "failed"; 
            state.error = action.error.message;
          });
      }
});

export default categorySlice.reducer;