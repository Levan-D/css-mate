/** @format */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type inputBtnsProps = "PT" | "EM" | "IN" | "CM" | "MM"

interface initialStateType {
  inputType: inputBtnsProps
  inputNumb: number
  base: number
  PPI:number
  flip: boolean
}
export const inputBtnsPX: inputBtnsProps[] = ["PT", "EM", "IN", "CM", "MM"]

const initialState: initialStateType = {
  inputType: inputBtnsPX[0],
  inputNumb: 0,
  base: 16,
  PPI: 96,
  flip: false,
}
const pixelConverterSlice = createSlice({
  name: "pixelConverter",
  initialState,
  reducers: {
    resetState: () => initialState,

    handleInputBtn: (state, action: PayloadAction<initialStateType["inputType"]>) => {
      state.inputType = action.payload
    },
    setFlip: state => {
      state.flip = !state.flip
    },

    setInputNumb: (state, action: PayloadAction<initialStateType["inputNumb"]>) => {
      state.inputNumb = action.payload
    },
    setInputBase: (state, action: PayloadAction<initialStateType["base"]>) => {
      state.base = action.payload
    },
    setInputPPI: (state, action: PayloadAction<initialStateType["PPI"]>) => {
      state.PPI = action.payload
    },
  },
})

export const { resetState, handleInputBtn, setInputNumb, setInputBase, setFlip,setInputPPI } =
  pixelConverterSlice.actions
export default pixelConverterSlice.reducer
