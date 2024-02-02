"use client";
import { configureStore } from "@reduxjs/toolkit";/* 
import Slice from "./createSlice/Slice";
import Slice1 from "./createSlice/Slice1"; */
import Product from "./createSlice/Product";
export const store = configureStore({
  reducer: {
    /* slice: Slice,
    slice1: Slice1, */
    cartItem: Product,
  },
});
