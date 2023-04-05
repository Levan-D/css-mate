/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"
import type { gradientSwatches } from "../../../data/GradientData"

interface initialStateType {
  type: "linear" | "conic" | "radial"
  kind: "repeating" | "constant"
  currentTab: number

  linearParams: {
    degree: number
  }
  radialParams: {
    shape: string
    coords: { x: number; y: number }
  }
  conicParams: {
    degree: number
    coords: { x: number; y: number }
  }

  offset: number
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

  linearParams: {
    degree: 135,
  },
  radialParams: {
    shape: "circle",
    coords: {
      x: 50,
      y: 50,
    },
  },
  conicParams: {
    degree: 0,
    coords: {
      x: 50,
      y: 50,
    },
  },

  offset: 1,
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

const GradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    resetState: () => initialState,
    setType: (state, action: PayloadAction<initialStateType["type"]>) => {
      state.type = action.payload
    },
    setKind: (state, action: PayloadAction<initialStateType["kind"]>) => {
      state.kind = action.payload
    },
    setRadialShape: (state, action: PayloadAction<string>) => {
      state.radialParams.shape = action.payload
    },
    setRadialCoords: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.radialParams.coords = action.payload
    },
    setConicCoords: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.conicParams.coords = action.payload
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
    setLinearDegree: (state, action: PayloadAction<number>) => {
      state.linearParams.degree = action.payload
    },
    setConicDegree: (state, action: PayloadAction<number>) => {
      state.conicParams.degree = action.payload
    },
    setStopPercentage: (
      state,
      action: PayloadAction<{ index: number; percent: number }>
    ) => {
      state.stops[action.payload.index].stop.percent = action.payload.percent
    },

    setNewStops: {
      reducer: (state, action: PayloadAction<initialStateType["stops"]>) => {
        // The action.payload is already modified by the prepare function
        state.stops = action.payload
      },
      prepare: (payload: gradientSwatches["stops"]) => {
        // Modify the payload as needed

        const modifiedPayload = payload.map(x => {
          return { id: uuidv4(), stop: x }
        })
        // Return the modified payload
        return { payload: modifiedPayload }
      },
    },

    addNewStop: state => {
      if (state.stops.length < 10) {
        state.stops.push({
          id: uuidv4(),
          stop: {
            percent: 100,
            color: state.stops[state.stops.length - 1].stop.color,
            opacity: 100,
          },
        })

        for (let i = state.stops.length - 1; i > 0; i--) {
          if (state.stops[i].stop.percent === state.stops[i - 1].stop.percent) {
            state.stops[i - 1].stop.percent = state.stops[i - 1].stop.percent - 1
          }
        }
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

export const selectGradientStyle = createSelector(
  (state: RootState) => state.Gradient,
  Gradient => {
    const kind = Gradient.kind === "repeating" ? "repeating-" : ""

    const type = Gradient.type

    const params =
      Gradient.type === "linear"
        ? Gradient.linearParams.degree + `deg`
        : Gradient.type === "radial"
        ? `${Gradient.radialParams.shape} at ${Gradient.radialParams.coords.x}% ${Gradient.radialParams.coords.y}%`
        : `from ${Gradient.conicParams.degree}deg at ${Gradient.conicParams.coords.x}% ${Gradient.conicParams.coords.y}%`

    const style = Gradient.stops
      .map(
        stop =>
          `rgba(${stop.stop.color}, ${stop.stop.opacity / 100}) ${stop.stop.percent}%`
      )
      .join(",")

    return `${kind}${type}-gradient(${params}, ${style})`
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
  setNewStops,
  deleteStop,
  setConicDegree,
  setLinearDegree,
  setConicCoords,
  setRadialCoords,
} = GradientSlice.actions
export default GradientSlice.reducer
