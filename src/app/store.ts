/** @format */

import { configureStore } from "@reduxjs/toolkit"
import boxShadowReducer from "../pages/boxShadow/boxShadowSlice"

export const store = configureStore({
  reducer: {
    boxShadow: boxShadowReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
