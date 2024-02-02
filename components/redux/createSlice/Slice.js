"use cleint";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const Slice = createSlice({
  name: "counter",
  initialState: 1,
  reducers: {
    change: (state, action) => {
      return (state = action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const { change } = Slice.actions;

export default Slice.reducer;
