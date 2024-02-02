"use cleint";
import { createSlice } from "@reduxjs/toolkit";
import img from "../../../../public/plant.svg";

const initialState = {
  img: [],
};

export const Slice1 = createSlice({
  name: "counter",
  initialState: [img],
  reducers: {
    add: (state, action) => {
      state.push({ src: action.payload });
    },
  },
});
// Action creators are generated for each case reducer function
export const { add } = Slice1.actions;

export default Slice1.reducer;
