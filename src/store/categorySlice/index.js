import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Components", "Equpments", "Boards", "Modules", "All"];

const categorySlice = createSlice({
    name: "Category",
    initialState
});

export default categorySlice;