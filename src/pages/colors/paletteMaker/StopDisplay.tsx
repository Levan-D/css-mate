/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectInbetweenColors } from "./paletteSlice"
import RgbToHex from "../../../utils/RGBToHex"
import Tooltip from "../../../components/Tooltip"

export default function StopDisplay() {
  const stops = useAppSelector(selectInbetweenColors)
  console.log(stops)
  return (
    <div className=" w-[690px] rounded-xl border-2 border-white bg-darkJungle-900  ">
      <div className="menuHeader      px-4 py-2">
        <div className="basis-[15%] text-center text-lg italic  text-slate-300 ">
          Shades
        </div>
      </div>
      <div className="m-2 flex  flex-wrap justify-center gap-2">
        {stops.map((stop, i) => (
          <div key={i} className="menuBlock w-40">
            <div
              style={{ backgroundColor: `rgb(${stop})` }}
              className=" h-24 rounded-t-lg rounded-b-md"
            ></div>
            <Tooltip text="Copied" onClick={true}>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(RgbToHex(stop))
                }}
                className="mx-2 mt-1 cursor-pointer rounded-md py-[1px] text-center duration-300 hover:bg-darkJungle-900 "
              >
                {RgbToHex(stop)}
              </div>
            </Tooltip>
            <Tooltip text="Copied" onClick={true}>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(`rgb(${stop})`)
                }}
                className="  mx-2 mb-1 cursor-pointer rounded-md py-[1px] text-center duration-300 hover:bg-darkJungle-900"
              >
                rgb({stop})
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  )
}
