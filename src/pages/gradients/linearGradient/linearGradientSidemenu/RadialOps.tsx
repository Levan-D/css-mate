/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setRadialShape } from "../linearGradientSlice"

const RadialOps = () => {
  const dispatch = useAppDispatch()
  const { radialShape } = useAppSelector(store => store.linearGradient)

  return (
    <div className="menuBlock m-2 flex justify-around px-2 py-1">
      <div
        onClick={() => {
          dispatch(setRadialShape("circle"))
        }}
        className={`${
          radialShape === "circle" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8 text-sm leading-4`}
      >
        Circle
      </div>
      <div
        onClick={() => {
          dispatch(setRadialShape("ellipse"))
        }}
        className={`${
          radialShape === "ellipse" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8 text-sm leading-4`}
      >
        Ellipse
      </div>
    </div>
  )
}

export default RadialOps
