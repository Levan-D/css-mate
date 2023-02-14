/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setKind } from "../linearGradientSlice"

const KindPicker = () => {
  const dispatch = useAppDispatch()
  const { kind } = useAppSelector(store => store.linearGradient)

  return (
    <div className="menuBlock m-2 flex justify-around px-2 py-1">
      <div
        onClick={() => {
          dispatch(setKind("constant"))
        }}
        className={`${
          kind === "constant" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8 text-sm leading-4`}
      >
        Constant
      </div>
      <div
        onClick={() => {
          dispatch(setKind("repeating"))
        }}
        className={`${
          kind === "repeating" ? "btnSecondary" : "btnSecondaryDisabled"
        }   h-8 text-sm leading-4`}
      >
        Repeating
      </div>
    </div>
  )
}

export default KindPicker
