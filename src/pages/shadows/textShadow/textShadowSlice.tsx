/** @format */

import { createSlice, createSelector } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"
//@ts-ignore
import { v4 as uuidv4 } from "uuid"

interface textshadowSettings {
  horizontal: number
  vertical: number
  blur: number
  opacity: number
  shadowColor: string
}

interface textShadowState {
  tabName: string
  id: string
  settings: textshadowSettings
}

const initialState = {
  currentTab: 0,
  textShadowData: [
    {
      tabName: "Sh1",
      id: uuidv4(),
      settings: {
        horizontal: 4,
        vertical: 2,
        blur: 2,
        opacity: 60,

        shadowColor: "255,255,255",
      },
    },
  ] as textShadowState[],
}

const textShadowSlice = createSlice({
  name: "textShadow",
  initialState,
  reducers: {
    resetState: () => initialState,
    setTabPage: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload
    },
    deleteTabPage: (state, action: PayloadAction<string>) => {
      if (state.textShadowData.length > 1) {
        state.textShadowData = state.textShadowData.filter(
          data => data.id !== action.payload
        )
        if (state.currentTab >= 1) {
          state.currentTab = state.currentTab - 1
        } else state.currentTab
      }
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.textShadowData[state.currentTab].settings.shadowColor = action.payload
    },
    setPreset: (state, action: PayloadAction<textshadowSettings>) => {
      let settings = {
        ...action.payload,
        shadowColor: state.textShadowData[state.currentTab].settings.shadowColor,
      }
      state.textShadowData[state.currentTab].settings = settings
    },
    updateTextShadow: (state, action: PayloadAction<{ value: number; name: string }>) => {
      //@ts-ignore
      state.textShadowData[state.currentTab].settings[`${action.payload.name}`] =
        action.payload.value
    },
    addTextShadow: state => {
      if (state.textShadowData.length < 12) {
        state.textShadowData.push({
          tabName: `Sh${state.textShadowData.length + 1}`,
          id: uuidv4(),
          settings: {
            horizontal: 4,
            vertical: 2,
            blur: 2,
            opacity: 60,
            shadowColor: "255,255,255",
          },
        })
        state.currentTab = state.currentTab + 1
      }
    },
  },
})

export const selectTextShadowTabs = createSelector(
  (state: RootState) => state.textShadow,
  textShadow =>
    textShadow.textShadowData.map((z, i) => ({
      name: z.tabName,
      id: z.id,
      index: i,
    }))
)

export const selectTextShadowStyle = createSelector(
  (state: RootState) => state.textShadow.textShadowData,
  textShadowData => {
    return textShadowData.map(
      data =>
        `${data.settings.horizontal}px ${data.settings.vertical}px ${
          data.settings.blur
        }px  rgba(${data.settings.shadowColor},${data.settings.opacity / 100})`
    )
  }
)

export const {
  setColor,
  setTabPage,
  deleteTabPage,
  resetState,
  setPreset,
  updateTextShadow,
  addTextShadow,
} = textShadowSlice.actions
export default textShadowSlice.reducer
