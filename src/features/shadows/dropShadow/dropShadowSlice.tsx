/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

interface dropshadowSettings {
  horizontal: number
  vertical: number
  blur: number
  opacity: number
  shadowColor: string
}

interface dropShadowState {
  tabName: string
  id: string
  settings: dropshadowSettings
}

const initialState = {
  currentTab: 0,
  dropShadowData: [
    {
      tabName: "Sh1",
      id: uuidv4(),
      settings: {
        horizontal: 12,
        vertical: 12,
        blur: 4,
        opacity: 20,
        shadowColor: "255,255,255",
      },
    },
  ] as dropShadowState[],
}

const dropShadowSlice = createSlice({
  name: "dropShadow",
  initialState,
  reducers: {
    resetState: () => initialState,
    setTabPage: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload
    },
    deleteTabPage: (state, action: PayloadAction<string>) => {
      if (state.dropShadowData.length > 1) {
        state.dropShadowData = state.dropShadowData.filter(
          data => data.id !== action.payload
        )
        if (state.currentTab >= 1) {
          state.currentTab = state.currentTab - 1
        } else state.currentTab
      }
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.dropShadowData[state.currentTab].settings.shadowColor = action.payload
    },
    updateDropShadow: (state, action: PayloadAction<{ value: number; name: string }>) => {
      //@ts-ignore
      state.dropShadowData[state.currentTab].settings[`${action.payload.name}`] =
        action.payload.value
    },
    addDropShadow: state => {
      if (state.dropShadowData.length < 12) {
        state.dropShadowData.push({
          tabName: `Sh${state.dropShadowData.length + 1}`,
          id: uuidv4(),
          settings: {
            horizontal: 12,
            vertical: 12,
            blur: 4,
            opacity: 20,
            shadowColor: "255,255,255",
          },
        })
        state.currentTab = state.currentTab + 1
      }
    },
  },
})

export const selectDropShadowTabs = createSelector(
  (state: RootState) => state.dropShadow,
  dropShadow =>
    dropShadow.dropShadowData.map((z, i) => ({
      name: z.tabName,
      id: z.id,
      index: i,
    }))
)

export const selectDropShadowStyle = createSelector(
  (state: RootState) => state.dropShadow.dropShadowData,
  dropShadowData => {
    return dropShadowData.map(
      data =>
        `${data.settings.horizontal}px ${data.settings.vertical}px ${
          data.settings.blur
        }px rgba(${data.settings.shadowColor},${data.settings.opacity / 100})`
    )
  }
)

export const {
  setColor,
  setTabPage,
  deleteTabPage,
  resetState,
  updateDropShadow,
  addDropShadow,
} = dropShadowSlice.actions
export default dropShadowSlice.reducer
