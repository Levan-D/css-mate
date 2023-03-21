/** @format */

import { configureStore } from "@reduxjs/toolkit"
import boxShadowReducer from "../pages/shadows/boxShadow/boxShadowSlice"
import dropShadowReducer from "../pages/shadows/dropShadow/dropShadowSlice"
import textShadowReducer from "../pages/shadows/textShadow/textShadowSlice"
import GradientReducer from "../pages/gradients/gradient/gradientSlice"
import floofReducer from "../components/floofGPT/floofGPTSlice"
import navbarReducer from "../components/navbar/navbarSlice"
import converterReducer from "../pages/colors/converter/converterSlice"
import paleteReducer from "../pages/colors/paletteMaker/paletteSlice"

export const store = configureStore({
  reducer: {
    boxShadow: boxShadowReducer,
    dropShadow: dropShadowReducer,
    textShadow: textShadowReducer,
    Gradient: GradientReducer,
    floof: floofReducer,
    navbar: navbarReducer,
    converter: converterReducer,
    palette: paleteReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
