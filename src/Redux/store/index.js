import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";
import productSlice from "../Product/productSlice";
import CartSlice from "../Cart/CartSlice";



export const store  = configureStore({
    reducer:{
        categoryReducer : categorySlice,
        pr : productSlice,
        cartReducer : CartSlice
    }
})

