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
  additionalData: string;
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
  type: "linear-gradient",
  kind: "regular",
  currentTab: 0,
  additionalData: `135deg`,
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
  reducers: {},
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
    return `${linearGradient.type}(${
      linearGradient.additionalData
    }, ${linearGradient.stops
      .map(
        (stop) =>
          `rgba(${stop.stop.color}, ${stop.stop.opacity}) ${stop.stop.percent}%`
      )
      .join(",")})`;
  }
);

export const {} = linearGradientSlice.actions;
export default linearGradientSlice.reducer;
