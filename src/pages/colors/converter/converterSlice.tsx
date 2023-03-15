/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

import HexToRGB from "../../../utils/HexToRGB"
import RgbToHex from "../../../utils/RGBToHex"

export const inputBtns = [
  { name: `HEX`, value: "#ffffff" },
  { name: `RGB`, value: "255, 255, 255" },
  { name: `HSL`, value: "0°, 0%, 100%" },
  { name: `CMYK`, value: "0%, 0%, 0%, 0%" },
  { name: `HSV`, value: "0°, 0%, 100%" },
]

interface initialStateType {
  inputType: {
    name: string
    value: string
  }
  outputType: {
    name: string
    value: string
  }
  inputText: string
  outputText: string
  isColorValid: boolean
  error: boolean
}

const initialState: initialStateType = {
  inputType: inputBtns[0],
  outputType: inputBtns[1],
  inputText: "",
  outputText: "",
  isColorValid: false,
  error: false,
}
const converterSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    resetState: () => initialState,
    setIsColorValid: state => {
      state.isColorValid = !state.isColorValid
    },
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
      const conType = state.inputType.name + "to" + state.outputType.name
      const expression = state.inputText.trim()
      const HEXRegex = /^#[0-9A-F]{6}$/i
      const RGBRegex =
        /^(?:\s*(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\s*,){2}\s*(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\s*$/

      switch (conType) {
        case `HEXtoCMYK`:
        case `HEXtoHSL`:
        case `HEXtoHSV`:
        case `HEXtoRGB`:
          let HEXtoRGB = expression
          if (!expression.startsWith("#")) {
            HEXtoRGB = "#" + expression
          }

          if (HEXRegex.test(HEXtoRGB)) {
            state.error = false
            state.outputText = HexToRGB(HEXtoRGB)
          } else state.error = true
          break

        case `RGBtoCMYK`:
        case `RGBtoHEX`:
          let RGBtoHEX = expression

          if (expression.startsWith("(") && expression.endsWith(")")) {
            RGBtoHEX = expression.slice(1, -1)
          }

          if (RGBRegex.test(RGBtoHEX)) {
            state.error = false
            state.outputText = RgbToHex(RGBtoHEX)
          } else state.error = true

          break

        case `RGBtoHSL`:
        case `RGBtoHSV`:

        case `HSLtoCMYK`:
        case `HSLtoHEX`:
        case `HSLtoHSV`:
        case `HSLtoRGB`:

        case `CMYKtoHEX`:
        case `CMYKtoHSV`:
        case `CMYKtoRGB`:
        case `CMYKtoHSL`:

        case `HSVtoCMYK`:
        case `HSVtoHEX`:
        case `HSVtoHSL`:
        case `HSVtoRGB`:

        default:
          return
      }
    },
  },
})

export const {
  resetState,
  setIsColorValid,
  setError,
  handleInputBtn,
  handleOutputBtn,
  setInputText,
  setOutputText,
  convertColor,
} = converterSlice.actions
export default converterSlice.reducer
