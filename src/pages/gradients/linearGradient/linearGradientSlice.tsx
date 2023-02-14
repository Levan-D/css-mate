/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

interface initialStateType {
  type: string
  kind: string
  currentTab: number
  degree: string
  radialShape: string
  conicFrom: string
  stops: {
    id: string
    stop: {
      percent: number
      color: string
      opacity: number
    }
  }[]
}

const initialState: initialStateType = {
  type: "linear",
  kind: "constant",
  currentTab: 0,
  degree: `135deg`,
  radialShape: "circle",
  conicFrom: "90deg",
  stops: [
    {
      id: uuidv4(),
      stop: {
        percent: 20,
        color: `94,161,255`,
        opacity: 100,
      },
    },

    {
      id: uuidv4(),
      stop: {
        percent: 80,
        color: `255,114,94`,
        opacity: 100,
      },
    },
  ],
}

const linearGradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    resetState: () => initialState,
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    setKind: (state, action: PayloadAction<string>) => {
      state.kind = action.payload
    },
    setRadialShape: (state, action: PayloadAction<string>) => {
      state.radialShape = action.payload
    },
    setStopColor: (state, action: PayloadAction<{ index: number; color: string }>) => {
      state.stops[action.payload.index].stop.color = action.payload.color
    },
    setStopOpacity: (
      state,
      action: PayloadAction<{ index: number; opacity: number }>
    ) => {
      state.stops[action.payload.index].stop.opacity = action.payload.opacity
    },
    setStopPercentage: (
      state,
      action: PayloadAction<{ index: number; percent: number }>
    ) => {
      state.stops[action.payload.index].stop.percent = action.payload.percent
    },
    addNewStop: state => {
      if (state.stops.length < 10) {
        state.stops[state.stops.length - 1].stop.percent =
          state.stops[state.stops.length - 1].stop.percent - 20
        state.stops.push({
          id: uuidv4(),
          stop: {
            percent: 100,
            color: state.stops[state.stops.length - 1].stop.color,
            opacity: 100,
          },
        })
      } else return
    },
    deleteStop: (state, action: PayloadAction<string>) => {
      if (state.stops.length > 2) {
        const newStops = state.stops.filter(x => x.id !== action.payload)
        state.stops = newStops
      } else return
    },
  },
})

// export const selectBoxShadowTabs = createSelector(
//   (state: RootState) => state.boxShadow,
//   boxShadow =>
//     boxShadow.boxShadowData.map((z, i) => ({
//       name: z.tabName,
//       id: z.id,
//       index: i,
//     }))
// )

export const selectLinearGradientStyle = createSelector(
  (state: RootState) => state.linearGradient,
  linearGradient => {
    return `${linearGradient.kind === "repeating" ? "repeating-" : ""}${
      linearGradient.type
    }-gradient(${
      linearGradient.type === "linear"
        ? linearGradient.degree
        : linearGradient.type === "radial"
        ? linearGradient.radialShape
        : `from ${linearGradient.conicFrom}`
    }, ${linearGradient.stops
      .map(
        stop =>
          `rgba(${stop.stop.color}, ${stop.stop.opacity / 100}) ${stop.stop.percent}%`
      )
      .join(",")})`
  }
)

export const {
  resetState,
  setType,
  setKind,
  setRadialShape,
  setStopColor,
  setStopOpacity,
  setStopPercentage,
  addNewStop,
  deleteStop,
} = linearGradientSlice.actions
export default linearGradientSlice.reducer
