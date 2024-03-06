import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    totalItemsPrice: 0,
    totalItems: 0,
    totalQuantity: 0
};


 const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addCartItem : (state, action) => {

            let itemExist =  state.cartItems.find((item) => item.productId === action.payload.iproductIdd);
            state.cartItems = [...state.cartItems, action.payload];
            state.totalItemsPrice = state.totalItemsPrice + action.payload.price;
            state.totalQuantity = ++state.totalQuantity;
            
            if(!itemExist) {
                state.totalItems = ++state.totalItems;
            }
        }

    }
 });


 export const {addCartItem} = cartSlice.actions;
 export default cartSlice.reducer;