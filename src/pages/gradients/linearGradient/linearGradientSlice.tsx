/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";

interface initialStateType {
  type: string;
  kind: string;
  currentTab: number;

  linearParams: {
    degree: number;
  };
  radialParams: {
    shape: string;
    x: number;
    y: number;
  };
  conicParams: {
    degree: number;
    x: number;
    y: number;
  };

  offset: number;
  stops: {
    id: string;
    stop: {
      percent: number;
      color: string;
      opacity: number;
    };
  }[];
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
    x: 50,
    y: 50,
  },
  conicParams: {
    degree: 0,
    x: 50,
    y: 50,
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
};

const linearGradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    resetState: () => initialState,
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setKind: (state, action: PayloadAction<string>) => {
      state.kind = action.payload;
    },
    setRadialShape: (state, action: PayloadAction<string>) => {
      state.radialParams.shape = action.payload;
    },
    setRadialCoords: (
      state,
      action: PayloadAction<{ x: number; y: number }>
    ) => {
      state.radialParams.x = action.payload.x;
      state.radialParams.y = action.payload.y;
    },
    setConicCoords: (
      state,
      action: PayloadAction<{ x: number; y: number }>
    ) => {
      state.conicParams.x = action.payload.x;
      state.conicParams.y = action.payload.y;
    },
    setStopColor: (
      state,
      action: PayloadAction<{ index: number; color: string }>
    ) => {
      state.stops[action.payload.index].stop.color = action.payload.color;
    },
    setStopOpacity: (
      state,
      action: PayloadAction<{ index: number; opacity: number }>
    ) => {
      state.stops[action.payload.index].stop.opacity = action.payload.opacity;
    },
    setLinearDegree: (state, action: PayloadAction<number>) => {
      state.linearParams.degree = action.payload;
    },
    setConicDegree: (state, action: PayloadAction<number>) => {
      state.conicParams.degree = action.payload;
    },
    setStopPercentage: (
      state,
      action: PayloadAction<{ index: number; percent: number }>
    ) => {
      state.stops[action.payload.index].stop.percent = action.payload.percent;
    },
    addNewStop: (state) => {
      if (state.stops.length < 10) {
        state.stops.push({
          id: uuidv4(),
          stop: {
            percent: 100,
            color: state.stops[state.stops.length - 1].stop.color,
            opacity: 100,
          },
        });

        for (let i = state.stops.length - 1; i > 0; i--) {
          if (state.stops[i].stop.percent === state.stops[i - 1].stop.percent) {
            state.stops[i - 1].stop.percent =
              state.stops[i - 1].stop.percent - 1;
          }
        }
      } else return;
    },
    deleteStop: (state, action: PayloadAction<string>) => {
      if (state.stops.length > 2) {
        const newStops = state.stops.filter((x) => x.id !== action.payload);
        state.stops = newStops;
      } else return;
    },
  },
});

export const selectLinearGradientStyle = createSelector(
  (state: RootState) => state.linearGradient,
  (linearGradient) => {
    return `${linearGradient.kind === "repeating" ? "repeating-" : ""}${
      linearGradient.type
    }-gradient(${
      linearGradient.type === "linear"
        ? linearGradient.linearParams.degree + `deg`
        : linearGradient.type === "radial"
        ? `${linearGradient.radialParams.shape} at ${linearGradient.radialParams.x}% ${linearGradient.radialParams.y}%`
        : `from ${linearGradient.conicParams.degree}deg at ${linearGradient.conicParams.x}% ${linearGradient.conicParams.y}%`
    }, ${linearGradient.stops
      .map(
        (stop) =>
          `rgba(${stop.stop.color}, ${stop.stop.opacity / 100}) ${
            stop.stop.percent
          }%`
      )
      .join(",")})`;
  }
);

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
  setConicDegree,
  setLinearDegree,
  setConicCoords,
  setRadialCoords,
} = linearGradientSlice.actions;
export default linearGradientSlice.reducer;
