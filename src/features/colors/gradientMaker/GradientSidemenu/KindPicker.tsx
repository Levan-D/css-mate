/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setKind } from "../gradientSlice"

const KindPicker = () => {
  const dispatch = useAppDispatch()
  const { kind } = useAppSelector(store => store.Gradient)

  const kinds: { value: "repeating" | "constant"; name: string }[] = [
    { value: "constant", name: "Const" },
    { value: "repeating", name: "Repeat" },
  ]

  return (
    <div className="menuBlock m-2 flex grow justify-around px-2 py-1">
      {kinds.map((btnKind, i) => (
        <div
          key={i}
          onClick={() => {
            dispatch(setKind(btnKind.value))
          }}
          className={`${
            kind === btnKind.value ? "btnSecondary" : "btnSecondaryDisabled"
          }   h-8 text-sm  leading-4`}
        >
          {btnKind.name}
        </div>
      ))}
    </div>
  )
}

export default KindPicker
