/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setType } from "../gradientSlice"

const TypePicker = () => {
  const dispatch = useAppDispatch()
  const { type } = useAppSelector(store => store.Gradient)

  const types: GradientBtnType[] = ["linear", "radial", "conic"]

  return (
    <div className="menuBlock m-2 flex justify-around px-2 py-1">
      {types.map((btnType, i) => (
        <div
          key={i}
          onClick={() => {
            dispatch(setType(btnType))
          }}
          className={`${type === btnType ? "btnSecondary" : "btnSecondaryDisabled"}   `}
        >
          {btnType.charAt(0).toUpperCase() + btnType.slice(1)}
        </div>
      ))}
    </div>
  )
}

export default TypePicker
