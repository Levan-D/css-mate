/** @format */

import React from "react"
import { useAppSelector } from "../../../app/hooks"
import { selectInbetweenColors } from "./paletteSlice"
import RgbToHex from "../../../utils/RGBToHex"

export default function ColorCodeDisplay() {
  const stops = useAppSelector(selectInbetweenColors)

  return (
    <div>
      <h2 className="mb-4  text-center text-xl font-bold ">Color Output</h2>
      <div className="flex  justify-center gap-16 ">
        <div>
          <h3 className="mb-2 text-center  text-lg font-bold  text-slate-300">HEX</h3>
          <div className="rounded-lg border-2 py-4 px-8">
            {stops.map((stop, i) => {
              if (typeof stop === "object" && stop.color !== undefined) {
                return <div key={i}>{RgbToHex(stop.color)}</div>
              }
            })}
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-center text-lg font-bold  text-slate-300">RGB</h3>
          <div className="rounded-lg border-2 py-4 px-8">
            {stops.map((stop, i) => {
              if (typeof stop === "object" && stop.color !== undefined) {
                return <div key={i}>rgb({stop.color})</div>
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
