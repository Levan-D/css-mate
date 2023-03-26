/** @format */

import React from "react"
import { useAppSelector } from "../../../app/hooks"
import { selectInbetweenColors } from "./paletteMixerSlice"
import RgbToHex from "../../../utils/colors/RGBToHex"
import Tooltip from "../../../components/Tooltip"

export default function StopDisplay() {
  const stops = useAppSelector(selectInbetweenColors)

  return (
    <div className=" mx-auto w-[350px] rounded-xl border-2  border-white bg-darkJungle-900 sm:w-[520px] md:w-[350px] lg:w-[520px] xl:w-[690px]  ">
      <div className="menuHeader      px-4 py-2">
        <div className="basis-[15%] text-center text-lg italic  text-slate-300 ">
          Shades
        </div>
      </div>
      <div className="m-2 flex  flex-wrap justify-center gap-2">
        {stops.map((stop, i) => {
          if (typeof stop === "object" && stop.color !== undefined) {
            return (
              <div key={i} className="menuBlock w-40">
                <div
                  style={{ backgroundColor: `rgb(${stop.color})` }}
                  className=" h-24 rounded-t-lg rounded-b-md"
                ></div>
                <div className="mx-2 mt-1 rounded-md text-center  font-semibold  ">
                  {stop.name}
                </div>
                <Tooltip text="Copied" onClick={true}>
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(RgbToHex(stop.color))
                    }}
                    className="mx-2 cursor-pointer  rounded-md text-center font-semibold text-slate-200 duration-300 hover:bg-darkJungle-900 "
                  >
                    {RgbToHex(stop.color)}
                  </div>
                </Tooltip>

                <Tooltip text="Copied" onClick={true}>
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(`rgb(${stop.color})`)
                    }}
                    className="  mx-2 mb-1 cursor-pointer rounded-md text-center font-semibold text-slate-200 duration-300 hover:bg-darkJungle-900"
                  >
                    rgb({stop.color})
                  </div>
                </Tooltip>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
