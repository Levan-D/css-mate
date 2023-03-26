/** @format */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import ColorConverter from "../../../utils/colors/ColorConverter"
import ColorValidator from "../../../utils/colors/ColorValidator"

export interface inputBtnsProps {
  name: "HEX" | "RGB" | "HSL" | "CMYK" | "HSV"
  value: "#ffffff" | "255, 255, 255" | "0, 0%, 100%" | "0%, 0%, 0%, 0%"
}

interface initialStateType {
  inputType: inputBtnsProps
  outputType: inputBtnsProps
  inputText: string
  outputText: string
  isColorValid: boolean
  error: boolean
}

export const inputBtns: inputBtnsProps[] = [
  { name: `HEX`, value: "#ffffff" },
  { name: `RGB`, value: "255, 255, 255" },
  { name: `HSL`, value: "0, 0%, 100%" },
  { name: `CMYK`, value: "0%, 0%, 0%, 0%" },
  { name: `HSV`, value: "0, 0%, 100%" },
]

const initialState: initialStateType = {
  inputType: inputBtns[0],
  outputType: inputBtns[0],
  inputText: "",
  outputText: "",
  isColorValid: false,
  error: false,
}

const colorNamerSlice = createSlice({
  name: "colorNamer",
  initialState,
  reducers: {
    setIsColorValid: state => {
      state.isColorValid = !state.isColorValid
    },
    setError: (state, action: PayloadAction<initialStateType["error"]>) => {
      state.error = action.payload
    },
    handleInputBtn: (state, action: PayloadAction<initialStateType["inputType"]>) => {
      state.inputType = action.payload
    },

    setInputText: (state, action: PayloadAction<initialStateType["inputText"]>) => {
      state.inputText = action.payload
    },

    convertColor: state => {
      const { expression, error } = ColorValidator({
        colorString: state.inputText,
        type: state.inputType.name,
      })
      state.isColorValid = false
      state.error = error

      const conType = state.inputType.name + "to" + state.outputType.name

      if (!state.error) {
        state.isColorValid = true
        if (conType !== "HEXtoHEX") {
          state.outputText = ColorConverter(expression, conType)
        } else {
          state.outputText = expression
        }
      }
    },
  },
})

export const { setIsColorValid, setError, handleInputBtn, setInputText, convertColor } =
  colorNamerSlice.actions
export default colorNamerSlice.reducer
