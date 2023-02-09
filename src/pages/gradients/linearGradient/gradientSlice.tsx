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
  additionalRules: string | number
  stops: {
    id: string
    stop: {
      percent: number
      color: string
    }
  }[]
}

const initialState: initialStateType = {
  type: "linear",
  kind: "regular",
  currentTab: 0,
  additionalRules: "",
  stops: [
    {
      id: uuidv4(),
      stop: {
        percent: 0,
        color: `0,0,0`,
      },
    },
  ],
}

const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {},
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

export const {} = gradientSlice.actions
export default gradientSlice.reducer
