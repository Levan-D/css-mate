/** @format */

import React from "react"
import ColorInverter from "../../../utils/ColorInverter"
import { useAppSelector } from "../../../app/hooks"
import { selectColor } from "./converterSlice"

export default function Shape() {
  const { outputText, outputType } = useAppSelector(store => store.converter)
  const color = useAppSelector(selectColor)

  const outputString =
    outputType.name === "HEX" ? outputText : `${outputType.name}(${outputText})`
  return (
    <div
      style={{ backgroundColor: color || `#172437` }}
      className="mt-4 flex  h-24  flex-col justify-around rounded-xl border-2 border-white   font-bold"
    >
      <div
        style={{ color: color && ColorInverter(color, "bw") }}
        className="mx-auto w-fit"
      >
        {color && outputString}
      </div>
    </div>
  )
}
