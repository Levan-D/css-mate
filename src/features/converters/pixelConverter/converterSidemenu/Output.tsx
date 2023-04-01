/** @format */

import React from "react"
import { useAppSelector, useAppDispatch } from "../../../../app/hooks"

export default function Output() {
  const { inputType, inputNumb, base, PPI, flip } = useAppSelector(
    store => store.pixelConverter
  )

  const calculateOutput = (
    type: string,
    numb: number,
    baseNumb: number,
    PPINumb: number,
    state: boolean
  ) => {
    switch (type) {
      case "PT":
        if (!state) {
          return (numb * 72) / 96
        } else if (state) {
          return (numb * 96) / 72
        }

      case "EM":
        if (!state) {
          return numb * baseNumb
        } else if (state) {
          return numb / baseNumb
        }

      case "IN":
        if (!state) {
          return numb / PPINumb
        } else if (state) {
          return numb * PPINumb
        }

      case "CM":
        if (!state) {
          return (numb / PPINumb) * 2.54
        } else if (state) {
          return (numb * PPINumb) / 2.54
        }

      case "MM":
        if (!state) {
          return (numb / PPINumb) * 25.4
        } else if (state) {
          return (numb * PPINumb) / 25.4
        }

      default:
        return 0
    }
  }

  return (
    <div className="menuContainer m-4">
      <div className="menuHeader py-1  text-center  text-xs italic text-slate-200">
        Output {!flip ? inputType : "PX"}
      </div>
      <div className="menuBlock m-2 py-2 text-center text-lg font-bold">
        {calculateOutput(inputType, inputNumb, base, PPI, flip).toFixed(2)}
      </div>
    </div>
  )
}
