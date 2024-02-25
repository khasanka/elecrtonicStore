import { createSlice } from "@reduxjs/toolkit";
import { Component } from "react";


const initialState = [
    {
        category: "Components",
        items: ["LED", "Diode", "Resistor", "Push Button"]
    },
    {
        category: "Equpments",
        items: ["Multimeter", "Solder Iron", "Tester"]
    },
    {
        category: "Boards",
        items: ["Arduino", "Raspberry Pi", "ESP", "Micro:Bit"]
    },
    {
        category: "Modules",
        items: ["Motor Drivers", "Power", "Display", "Measuring"]
    }

];

const accordionCatSlice = createSlice(
    {
        name: "accordionSlice",
        initialState
    }
);

export default accordionCatSlice;