/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import ColorConverter from "../../../utils/ColorConverter"
import ColorValidator from "../../../utils/ColorValidator"
import { RootState } from "../../../app/store"

export interface inputBtnsProps {
  name: "HEX" | "RGB" | "HSL" | "CMYK" | "HSV"
  value: "#ffffff" | "255, 255, 255" | "0, 0%, 100%" | "0%, 0%, 0%, 0%"
  outputValue:
    | "#ffffff"
    | "RGB(255, 255, 255)"
    | "HSL(0, 0%, 100%)"
    | "CMYK(0%, 0%, 0%, 0%)"
    | "HSV(0, 0%, 100%)"
}

interface initialStateType {
  inputType: inputBtnsProps
  outputType: inputBtnsProps
  inputText: string
  outputText: string
  error: boolean
}
export const inputBtns: inputBtnsProps[] = [
  { name: `HEX`, outputValue: "#ffffff", value: "#ffffff" },
  { name: `RGB`, outputValue: "RGB(255, 255, 255)", value: "255, 255, 255" },
  { name: `HSL`, outputValue: "HSL(0, 0%, 100%)", value: "0, 0%, 100%" },
  { name: `CMYK`, outputValue: "CMYK(0%, 0%, 0%, 0%)", value: "0%, 0%, 0%, 0%" },
  { name: `HSV`, outputValue: "HSV(0, 0%, 100%)", value: "0, 0%, 100%" },
]

const initialState: initialStateType = {
  inputType: inputBtns[0],
  outputType: inputBtns[1],
  inputText: "",
  outputText: "",
  error: false,
}
const colorConverterSlice = createSlice({
  name: "colorConverter",
  initialState,
  reducers: {
    resetState: () => initialState,
    setError: (state, action: PayloadAction<initialStateType["error"]>) => {
      state.error = action.payload
    },
    handleInputBtn: (state, action: PayloadAction<initialStateType["inputType"]>) => {
      state.inputType = action.payload
      if (action.payload.name === state.outputType.name) {
        const index = inputBtns.findIndex(x => x.name === action.payload.name)
        if (index + 1 === inputBtns.length) {
          state.outputType = inputBtns[0]
        } else if (index + 1 !== inputBtns.length) {
          state.outputType = inputBtns[index + 1]
        }
      }
    },
    handleOutputBtn: (state, action: PayloadAction<initialStateType["outputType"]>) => {
      if (action.payload.name !== state.inputType.name) {
        state.outputType = action.payload
      }
    },
    setInputText: (state, action: PayloadAction<initialStateType["inputText"]>) => {
      state.inputText = action.payload
    },
    setOutputText: (state, action: PayloadAction<initialStateType["outputText"]>) => {
      state.outputText = action.payload
    },

    convertColor: state => {
      const { expression, error } = ColorValidator({
        colorString: state.inputText,
        type: state.inputType.name,
      })
      state.error = error

      const conType = state.inputType.name + "to" + state.outputType.name

      if (!state.error) {
        state.outputText = ColorConverter(expression, conType)
      }
    },
  },
})

export const selectColor = createSelector(
  (state: RootState) => state.colorConverter,
  converter => {
    const { expression, error } = ColorValidator({
      colorString: converter.inputText,
      type: converter.inputType.name,
    })

    const conType = converter.inputType.name + "to" + "HEX"

    if (!error && converter.inputText !== "") {
      return ColorConverter(expression, conType)
    }
  }
)

export const {
  resetState,
  setError,
  handleInputBtn,
  handleOutputBtn,
  setInputText,
  setOutputText,
  convertColor,
} = colorConverterSlice.actions
export default colorConverterSlice.reducer
