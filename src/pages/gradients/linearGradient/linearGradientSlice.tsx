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
  degree: string;
  radialShape: string;
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
  type: "Linear",
  kind: "Linear",
  currentTab: 0,
  degree: `135deg`,
  radialShape: "circle",
  stops: [
    {
      id: uuidv4(),
      stop: {
        percent: 10,
        color: `60,108,152`,
        opacity: 1,
      },
    },

    {
      id: uuidv4(),
      stop: {
        percent: 90,
        color: `0, 20, 30`,
        opacity: 1,
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
  },
});

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
  (linearGradient) => {
    console.log(
      `${linearGradient.type.toLowerCase()}-gradient(${
        linearGradient.type === "Linear"
          ? linearGradient.degree
          : linearGradient.type === "Radial"
          ? linearGradient.radialShape
          : ""
      }, ${linearGradient.stops
        .map(
          (stop) =>
            `rgba(${stop.stop.color}, ${stop.stop.opacity}) ${stop.stop.percent}%`
        )
        .join(",")})`
    );
    return `${linearGradient.type.toLowerCase()}-gradient(${
      linearGradient.type === "Linear"
        ? linearGradient.degree
        : linearGradient.type === "Radial"
        ? linearGradient.radialShape
        : ""
    }, ${linearGradient.stops
      .map(
        (stop) =>
          `rgba(${stop.stop.color}, ${stop.stop.opacity}) ${stop.stop.percent}%`
      )
      .join(",")})`;
  }
);

export const { resetState, setType } = linearGradientSlice.actions;
export default linearGradientSlice.reducer;
