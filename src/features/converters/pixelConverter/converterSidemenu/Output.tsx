/** @format */

import React from "react"
import { useAppSelector, useAppDispatch } from "../../../../app/hooks"

type ConversionFn = (
  numb: number,
  baseNumb: number,
  PPINumb: number,
  state: boolean
) => number

export default function Output() {
  const { inputType, inputNumb, base, PPI, flip } = useAppSelector(
    store => store.pixelConverter
  )

  const conversions: Record<string, ConversionFn> = {
    PT: (numb, _, __, state) => (state ? (numb * 96) / 72 : (numb * 72) / 96),
    EM: (numb, baseNumb, __, state) => (state ? numb / baseNumb : numb * baseNumb),
    IN: (numb, __, PPINumb, state) => (state ? numb * PPINumb : numb / PPINumb),
    CM: (numb, __, PPINumb, state) =>
      state ? (numb * PPINumb) / 2.54 : (numb / PPINumb) * 2.54,
    MM: (numb, __, PPINumb, state) =>
      state ? (numb * PPINumb) / 25.4 : (numb / PPINumb) * 25.4,
  }

  const calculateOutput = (
    type: string,
    numb: number,
    baseNumb: number,
    PPINumb: number,
    state: boolean
  ): number => {
    const conversionFn = conversions[type]
    return conversionFn ? conversionFn(numb, baseNumb, PPINumb, state) : 0
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
