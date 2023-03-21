/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

interface initialStateType {
  colorStart: string
  colorEnd: string
  stops: number
}

const initialState: initialStateType = {
  colorStart: "94, 161, 255",
  colorEnd: "255, 114, 94",
  stops: 10,
}

const PaletteSlice = createSlice({
  name: "palette",
  initialState,
  reducers: {
    resetState: () => initialState,
    setStart: (state, action: PayloadAction<initialStateType["colorStart"]>) => {
      state.colorStart = action.payload
    },
    setEnd: (state, action: PayloadAction<initialStateType["colorEnd"]>) => {
      state.colorEnd = action.payload
    },
    setStops: (state, action: PayloadAction<initialStateType["stops"]>) => {
      state.stops = action.payload
    },
  },
})

export const selectInbetweenColors = createSelector(
  (state: RootState) => state.palette,
  palette => {
    const colorStart: number[] = palette.colorEnd.split(",").map(str => Number(str))
    const colorEnd: number[] = palette.colorEnd.split(",").map(str => Number(str))

    const rDiff = (colorEnd[0] - colorStart[0]) / (palette.stops - 1)
    const gDiff = (colorEnd[1] - colorStart[1]) / (palette.stops - 1)
    const bDiff = (colorEnd[2] - colorStart[2]) / (palette.stops - 1)

    const colors = []
    for (let i = 0; i < palette.stops; i++) {
      const r = Math.round(colorStart[0] + rDiff * i)
      const g = Math.round(colorStart[1] + gDiff * i)
      const b = Math.round(colorStart[2] + bDiff * i)
      colors.push(`${r}, ${g}, ${b}`)
    }

    return colors
  }
)

export const { resetState, setStart, setEnd, setStops } = PaletteSlice.actions
export default PaletteSlice.reducer
