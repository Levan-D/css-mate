/** @format */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  backgroundColor: string;
  textColor: string;
  shadowColor: string;
  shadowOpacity: number;
  shadow: boolean;
  bold: boolean;
  textSize: boolean;
}

const initialState: initialStateType = {
  backgroundColor: `#5ea1ff`,
  textColor: `#ff725e`,
  shadowColor: `255,255,255`,
  shadowOpacity: 1,
  shadow: false,
  bold: false,
  textSize: false,
};

const colorChekerSlice = createSlice({
  name: "colorChecker",
  initialState,
  reducers: {
    setBackgroundColor: (
      state,
      action: PayloadAction<initialStateType["backgroundColor"]>
    ) => {
      state.backgroundColor = action.payload;
    },
    setTextColor: (
      state,
      action: PayloadAction<initialStateType["textColor"]>
    ) => {
      state.textColor = action.payload;
    },
    setShadowOpacity: (
      state,
      action: PayloadAction<initialStateType["shadowOpacity"]>
    ) => {
      state.shadowOpacity = action.payload;
    },
    setShadowColor: (
      state,
      action: PayloadAction<initialStateType["shadowColor"]>
    ) => {
      state.shadowColor = action.payload;
    },
    toggleBold: (state) => {
      state.bold = !state.bold;
    },
    toggleTextSize: (state) => {
      state.textSize = !state.textSize;
    },
    toggleShadow: (state) => {
      state.shadow = !state.shadow;
    },
  },
});

export const {
  setBackgroundColor,
  setTextColor,
  setShadowColor,
  toggleBold,
  setShadowOpacity,
  toggleShadow,
  toggleTextSize,
} = colorChekerSlice.actions;
export default colorChekerSlice.reducer;
