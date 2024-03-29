/** @format */

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { pageButtons } from "../../data/PageButtons"

interface navbarState {
  path: string
  windowWidth: number
  docHeight: number
  pathArray: string[]
  categoryIndex: number
}

const initialState: navbarState = {
  path: "",
  windowWidth: window.innerWidth,
  docHeight: window.innerHeight,

  pathArray: [],
  categoryIndex: 0,
}

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => {
      const findPath = action.payload.split("/").filter(n => n)
      state.path = action.payload
      state.pathArray = findPath
      state.categoryIndex =
        pageButtons.findIndex(x => x.catPath === findPath[0]) > 0
          ? pageButtons.findIndex(x => x.catPath === findPath[0])
          : 0
    },
    setWindowWidth: (state, action: PayloadAction<number>) => {
      state.windowWidth = action.payload
    },
    setDocHeight: (state, action: PayloadAction<number>) => {
      state.docHeight = action.payload
    },
  },
})

export const { setPath, setWindowWidth, setDocHeight } = navbarSlice.actions
export default navbarSlice.reducer
