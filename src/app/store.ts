/** @format */

import { configureStore } from "@reduxjs/toolkit"
import boxShadowReducer from "../features/shadows/boxShadow/boxShadowSlice"
import dropShadowReducer from "../features/shadows/dropShadow/dropShadowSlice"
import textShadowReducer from "../features/shadows/textShadow/textShadowSlice"
import GradientReducer from "../features/colors/gradientMaker/gradientSlice"
import floofReducer from "../features/floofGPT/floofGPTSlice"
import navbarReducer from "../components/navbar/navbarSlice"
import colorConverterReducer from "../features/converters/colorConverter/colorConverterSlice"
import pixelConverterReducer from "../features/converters/pixelConverter/pixelConverterSlice"
import paletteMixerReducer from "../features/colors/paletteMixer/paletteMixerSlice"
import colorNamerReducer from "../features/colors/colorNamer/colorNamerSlice"
import contrastCheckerReducer from "../features/colors/contrastChecker/contrastCheckerSlice"

export const store = configureStore({
  reducer: {
    boxShadow: boxShadowReducer,
    dropShadow: dropShadowReducer,
    textShadow: textShadowReducer,
    Gradient: GradientReducer,
    floof: floofReducer,
    navbar: navbarReducer,
    colorConverter: colorConverterReducer,
    pixelConverter: pixelConverterReducer,
    paletteMixer: paletteMixerReducer,
    colorNamer: colorNamerReducer,
    contrastChecker: contrastCheckerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
