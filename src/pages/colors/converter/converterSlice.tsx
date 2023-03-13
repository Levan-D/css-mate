/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";

export const inputBtns = [
  { name: `HEX`, value: "#ffffff" },
  { name: `RGB`, value: "255, 255, 255" },
  { name: `HSL`, value: "0°, 0%, 100%" },
  { name: `CMYK`, value: "0%, 0%, 0%, 0%" },
  { name: `HSV`, value: "0°, 0%, 100%" },
];

interface initialStateType {
  inputType: {
    name: string;
    value: string;
  };
  outputType: {
    name: string;
    value: string;
  };
  inputText: string;
  outputText: string;
  isColorValid: boolean;
  error: boolean;
}

const initialState: initialStateType = {
  inputType: inputBtns[0],
  outputType: inputBtns[1],
  inputText: "",
  outputText: "",
  isColorValid: false,
  error: false,
};
const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    resetState: () => initialState,
    setIsColorValid: (state) => {
      state.isColorValid = !state.isColorValid;
    },
    setError: (state) => {
      state.isColorValid = !state.error;
    },
    handleInputBtn: (
      state,
      action: PayloadAction<initialStateType["inputType"]>
    ) => {
      state.inputType = action.payload;
      if (action.payload.name === state.outputType.name) {
        const index = inputBtns.findIndex(
          (x) => x.name === action.payload.name
        );
        if (index + 1 === inputBtns.length) {
          state.outputType = inputBtns[0];
        } else if (index + 1 !== inputBtns.length) {
          state.outputType = inputBtns[index + 1];
        }
      }
    },
    handleOutputBtn: (
      state,
      action: PayloadAction<initialStateType["outputType"]>
    ) => {
      if (action.payload.name !== state.inputType.name) {
        state.outputType = action.payload;
      }
    },
    setInputText: (
      state,
      action: PayloadAction<initialStateType["inputText"]>
    ) => {
      state.inputText = action.payload;
    },
    setOutputText: (
      state,
      action: PayloadAction<initialStateType["outputText"]>
    ) => {
      state.outputText = action.payload;
    },
  },
});

export const {
  resetState,
  setIsColorValid,
  setError,
  handleInputBtn,
  handleOutputBtn,
  setInputText,
  setOutputText,
} = converterSlice.actions;
export default converterSlice.reducer;
