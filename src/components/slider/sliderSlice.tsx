/** @format */

import { createSlice } from "@reduxjs/toolkit";

interface navbarState {
  isOpen: boolean;
  isMin: boolean;
  minWidth: number;
  maxWidth: number;
  renderedPaths: ["/gradient-maker", "/palette-generator"];
}

const initialState: navbarState = {
  isOpen: false,
  isMin: true,
  minWidth: 400,
  maxWidth: 700,
  renderedPaths: ["/gradient-maker", "/palette-generator"],
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
      state.isMin = true;
    },
    setIsMin: (state) => {
      state.isMin = !state.isMin;
    },
  },
});

export const { setIsOpen, setIsMin } = sliderSlice.actions;
export default sliderSlice.reducer;
