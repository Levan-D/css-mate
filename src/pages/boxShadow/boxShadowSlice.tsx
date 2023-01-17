/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface boxshadowSettings {
  horizontal: number
  vertical: number
  blur: number
  spread: number
  opacity: number
  inset: boolean
  shadowColor: string
}

interface boxShadowState {
  tabName: string
  settings: boxshadowSettings
}

const initialState = {
  currentTab: 0,
  boxShadowData: [
    {
      tabName: "BS1",
      settings: {
        horizontal: 12,
        vertical: 12,
        blur: 4,
        spread: 0,
        opacity: 20,
        inset: false,
        shadowColor: "255,255,255",
      },
    },
    {
      tabName: "BS1",
      settings: {
        horizontal: 12,
        vertical: 12,
        blur: 42,
        spread: 0,
        opacity: 44,
        inset: false,
        shadowColor: "60, 179, 113",
      },
    },
  ] as boxShadowState[],
}

const boxShadowSlice = createSlice({
  name: "boxShadow",
  initialState,
  reducers: {
    resetState: () => initialState,
    setColor: (state, action: PayloadAction<string>) => {
      state.boxShadowData[state.currentTab].settings.shadowColor = action.payload
    },
    setPreset: (state, action: PayloadAction<boxshadowSettings>) => {
      let settings = {
        ...action.payload,
        shadowColor: state.boxShadowData[state.currentTab].settings.shadowColor,
      }
      state.boxShadowData[state.currentTab].settings = settings
    },
    toggleInset: state => {
      state.boxShadowData[state.currentTab].settings.inset =
        !state.boxShadowData[state.currentTab].settings.inset
    },
    updateBoxShadow: (state, action: PayloadAction<{ value: number; name: string }>) => {
      //@ts-ignore
      state.boxShadowData[state.currentTab].settings[`${action.payload.name}`] =
        action.payload.value
    },
  },
})

export const getBoxShadowTabs = createSelector(
  (state: RootState) => state.boxShadow,
  boxShadow =>
    boxShadow.boxShadowData.map((z, i) => ({
      name: z.tabName,
      index: i,
    }))
)

export const { setColor, resetState, setPreset, toggleInset, updateBoxShadow } =
  boxShadowSlice.actions
export default boxShadowSlice.reducer
