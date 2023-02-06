/** @format */

import { configureStore } from "@reduxjs/toolkit"
import boxShadowReducer from "../pages/shadows/boxShadow/boxShadowSlice"
import dropShadowReducer from "../pages/shadows/dropShadow/dropShadowSlice"
import floofReducer from "../components/floofGPT/floofGPTSlice"
import navbarReducer from "../components/navbar/navbarSlice"

export const store = configureStore({
  reducer: {
    boxShadow: boxShadowReducer,
    dropShadow: dropShadowReducer,
    floof: floofReducer,
    navbar: navbarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
