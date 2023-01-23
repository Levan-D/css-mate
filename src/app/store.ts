/** @format */

import { configureStore } from "@reduxjs/toolkit"
import boxShadowReducer from "../pages/boxShadow/boxShadowSlice"
import floofReducer from "../components/floofGPT/floofGPTSlice"

export const store = configureStore({
  reducer: {
    boxShadow: boxShadowReducer,
    floof: floofReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
