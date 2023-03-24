/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
//@ts-ignore
import colorNamer from "color-namer"
import RgbToHex from "../../../utils/RGBToHex"

interface initialStateType {
  colorStart: string
  colorEnd: string
  stops: number
  reverse: boolean
  reset: boolean
}

const initialState: initialStateType = {
  colorStart: "94, 161, 255",
  colorEnd: "255, 114, 94",
  stops: 10,
  reverse: false,
  reset: true,
}

const paletteMixerSlice = createSlice({
  name: "paletteMixer",
  initialState,
  reducers: {
    resetState: () => initialState,
    setReset: state => {
      state.reset = false
    },
    setStart: (state, action: PayloadAction<initialStateType["colorStart"]>) => {
      state.colorStart = action.payload
    },
    setEnd: (state, action: PayloadAction<initialStateType["colorEnd"]>) => {
      state.colorEnd = action.payload
    },
    setReverse: state => {
      state.reverse = !state.reverse
    },
    setStops: (state, action: PayloadAction<initialStateType["stops"]>) => {
      state.stops = action.payload
    },
  },
})

export const selectInbetweenColors = createSelector(
  (state: RootState) => state.paletteMixer,
  palette => {
    const colorStart: number[] = palette.colorStart.split(",").map(str => Number(str))
    const colorEnd: number[] = palette.colorEnd.split(",").map(str => Number(str))

    if (palette.stops === 1) {
      const midpoint = [
        Math.round((colorStart[0] + colorEnd[0]) / 2),
        Math.round((colorStart[1] + colorEnd[1]) / 2),
        Math.round((colorStart[2] + colorEnd[2]) / 2),
      ]
      return [`${midpoint[0]}, ${midpoint[1]}, ${midpoint[2]}`]
    }

    const rDiff = (colorEnd[0] - colorStart[0]) / (palette.stops - 1)
    const gDiff = (colorEnd[1] - colorStart[1]) / (palette.stops - 1)
    const bDiff = (colorEnd[2] - colorStart[2]) / (palette.stops - 1)

    const colors = []

    for (let i = 0; i < palette.stops; i++) {
      const r = Math.round(colorStart[0] + rDiff * i)
      const g = Math.round(colorStart[1] + gDiff * i)
      const b = Math.round(colorStart[2] + bDiff * i)

      try {
        colors.push({
          color: `${r}, ${g}, ${b}`,
          name: colorNamer(RgbToHex(`${r}, ${g}, ${b}`)).ntc[0].name,
        })
      } catch (error) {
        colors.push({
          color: `${r}, ${g}, ${b}`,
          name: "Name Not Known",
        })
      }
    }

    if (palette.reverse) {
      colors.reverse()
    }
    return colors
  }
)

export const { resetState, setReset, setStart, setEnd, setStops, setReverse } =
  paletteMixerSlice.actions
export default paletteMixerSlice.reducer
