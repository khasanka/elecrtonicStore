import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name:"LED",
        price:5,
        img:"LED.jpeg"
    },{
        name:"Diode",
        price:8,
        img:"Diode.jpg"
    },{
        name:"Resistor",
        price:2,
        img:"Resistor.png"
    },{
        name:"Push Button",
        price:2,
        img:"PushButton.jpg"
    }

];

const productSlice = createSlice({
        name: "products",
        initialState
    }
);

export default productSlice;