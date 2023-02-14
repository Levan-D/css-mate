/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setRadialShape } from "../linearGradientSlice"

const RadialOps = () => {
  const dispatch = useAppDispatch()
  const { radialShape } = useAppSelector(store => store.linearGradient)

  return (
    <div className="menuBlock m-2 flex grow justify-between px-2 py-1">
      <div
        onClick={() => {
          dispatch(setRadialShape("circle"))
        }}
        className={`${
          radialShape === "circle" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8  text-sm leading-4`}
      >
        <div className="h-6 w-6 translate-y-[-4px] rounded-full border-4"></div>
      </div>
      <div
        onClick={() => {
          dispatch(setRadialShape("ellipse"))
        }}
        className={`${
          radialShape === "ellipse" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8  text-sm leading-4`}
      >
        <div className="h-6 w-8 translate-y-[-4px] rounded-full  border-4"></div>
      </div>
    </div>
  )
}

export default RadialOps
