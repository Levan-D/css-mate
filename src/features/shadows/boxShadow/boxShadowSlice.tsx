/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

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
  id: string
  settings: boxshadowSettings
}

const initialState = {
  currentTab: 0,
  boxShadowData: [
    {
      tabName: "Sh1",
      id: uuidv4(),
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
  ] as boxShadowState[],
}

const boxShadowSlice = createSlice({
  name: "boxShadow",
  initialState,
  reducers: {
    resetState: () => initialState,
    setTabPage: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload
    },
    deleteTabPage: (state, action: PayloadAction<string>) => {
      if (state.boxShadowData.length > 1) {
        state.boxShadowData = state.boxShadowData.filter(
          data => data.id !== action.payload
        )
        if (state.currentTab >= 1) {
          state.currentTab = state.currentTab - 1
        } else state.currentTab
      }
    },
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
    addBoxShadow: state => {
      if (state.boxShadowData.length < 12) {
        state.boxShadowData.push({
          tabName: `Sh${state.boxShadowData.length + 1}`,
          id: uuidv4(),
          settings: {
            horizontal: 12,
            vertical: 12,
            blur: 4,
            spread: 0,
            opacity: 20,
            inset: false,
            shadowColor: "255,255,255",
          },
        })
        state.currentTab = state.currentTab + 1
      }
    },
  },
})

export const selectBoxShadowTabs = createSelector(
  (state: RootState) => state.boxShadow,
  boxShadow =>
    boxShadow.boxShadowData.map((z, i) => ({
      name: z.tabName,
      id: z.id,
      index: i,
    }))
)

export const selectBoxShadowStyle = createSelector(
  (state: RootState) => state.boxShadow.boxShadowData,
  boxShadowData => {
    return boxShadowData.map(
      data =>
        `${data.settings.inset ? "inset " : ""}${data.settings.horizontal}px ${
          data.settings.vertical
        }px ${data.settings.blur}px ${data.settings.spread}px rgba(${
          data.settings.shadowColor
        },${data.settings.opacity / 100})`
    )
  }
)

export const {
  setColor,
  setTabPage,
  deleteTabPage,
  resetState,
  setPreset,
  toggleInset,
  updateBoxShadow,
  addBoxShadow,
} = boxShadowSlice.actions
export default boxShadowSlice.reducer
