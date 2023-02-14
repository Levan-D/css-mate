/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setType } from "../linearGradientSlice"

const TypePicker = () => {
  const dispatch = useAppDispatch()
  const { type } = useAppSelector(store => store.linearGradient)

  return (
    <div className="menuBlock m-2 flex justify-around px-2 py-1">
      <div
        onClick={() => {
          dispatch(setType("linear"))
        }}
        className={`${
          type === "linear" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8 text-sm leading-4`}
      >
        Linear
      </div>
      <div
        onClick={() => {
          dispatch(setType("radial"))
        }}
        className={`${
          type === "radial" ? "btnSecondary  " : "btnSecondaryDisabled"
        }  h-8 text-sm leading-4`}
      >
        Radial
      </div>
      <div
        onClick={() => {
          dispatch(setType("conic"))
        }}
        className={`${
          type === "conic" ? "btnSecondary   " : "btnSecondaryDisabled"
        }  h-8 text-sm leading-4`}
      >
        Conic
      </div>
    </div>
  )
}

export default TypePicker
