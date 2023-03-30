/** @format */

import { useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { selectInbetweenColors } from "./paletteMixerSlice"
import RgbToHex from "../../../utils/colors/RGBToHex"

import Tooltip from "../../../components/Tooltip"
import ContrastChecker from "../../../utils/colors/ContrastChecker"

export default function StopDisplay() {
  const stops = useAppSelector(selectInbetweenColors)
  const [showText, setShowText] = useState(false)
  const [showShadow, setShowShadow] = useState(false)
  const [toggleBold, setToggleBold] = useState(false)

  return (
    <div className=" mx-auto w-[350px] rounded-xl border-2  border-white bg-darkJungle-900 sm:w-[520px] md:w-[350px] lg:w-[520px] xl:w-[690px]  ">
      <div className="menuHeader flex justify-between    px-4 py-2">
        <div className="mt-1 flex gap-2 ">
          <div
            className={`${
              !showText && `!border-slate-500 !text-slate-500`
            }  h-6 w-6 cursor-pointer select-none rounded-full border-2 border-slate-300 text-center leading-5 text-slate-300`}
            onClick={() => setShowText(x => !x)}
          >
            T
          </div>
          <div
            className={`${
              showText && showShadow && `!border-slate-300 !text-slate-300`
            } ${
              showText && `!cursor-pointer !border-slate-500 !text-slate-500`
            } h-6 w-6  cursor-not-allowed select-none rounded-full border-2 border-slate-600 text-center leading-5 text-slate-600`}
            onClick={() => showText && setShowShadow(x => !x)}
          >
            S
          </div>
          <div
            className={`${
              showText && toggleBold && `!border-slate-300 !text-slate-300`
            } ${
              showText && `!cursor-pointer !border-slate-500 !text-slate-500`
            } h-6 w-6  cursor-not-allowed select-none rounded-full border-2 border-slate-600 text-center leading-5 text-slate-600`}
            onClick={() => showText && setToggleBold(x => !x)}
          >
            B
          </div>
        </div>
        <div className="mr-20 basis-[15%] text-center text-lg  italic text-slate-300">
          Shades
        </div>
        <div></div>
      </div>
      <div className="m-2 flex  flex-wrap justify-center gap-2">
        {stops.map((stop, i) => {
          if (typeof stop === "object" && stop.color !== undefined) {
            return (
              <div key={i} className="menuBlock w-40">
                <div
                  style={{ backgroundColor: `rgb(${stop.color})` }}
                  className=" flex h-24 flex-col justify-around rounded-t-lg rounded-b-md text-center"
                >
                  {showText && (
                    <>
                      <div
                        className={` flex justify-center gap-4 pt-2 text-[14px] text-black`}
                      >
                        <div
                          className={`${
                            showShadow && "[text-shadow:2px_1px_2px__rgba(0,0,0,0.6)]"
                          } ${toggleBold && `font-bold`} `}
                        >
                          Black
                        </div>
                        <div className="rounded-md bg-slate-200 bg-opacity-60 px-2">
                          <span>
                            {ContrastChecker(RgbToHex(stop.color), "#000000").ratio}
                          </span>
                          &#32;
                          <span>
                            {ContrastChecker(RgbToHex(stop.color), "#000000").rating}
                          </span>
                        </div>
                      </div>
                      <div className={`flex justify-center gap-4 pb-2 text-[14px] `}>
                        <div
                          className={`${
                            showShadow &&
                            "[text-shadow:2px_1px_2px__rgba(255,255,255,0.6)]"
                          } ${toggleBold && `font-bold`} `}
                        >
                          White
                        </div>
                        <div className="rounded-md bg-slate-700 bg-opacity-60 px-2">
                          <span>
                            {ContrastChecker(RgbToHex(stop.color), "#ffffff").ratio}
                          </span>
                          &#32;
                          <span>
                            {ContrastChecker(RgbToHex(stop.color), "#ffffff").rating}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="mx-2 mt-1 rounded-md text-center  font-semibold  ">
                  {stop.name}
                </div>
                <Tooltip text="Copied" onClick={true}>
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(RgbToHex(stop.color))
                    }}
                    className="mx-2 cursor-pointer rounded-md py-[2px] text-center text-sm font-semibold text-slate-200 duration-300 hover:bg-darkJungle-900 "
                  >
                    {RgbToHex(stop.color)}
                  </div>
                </Tooltip>

                <Tooltip text="Copied" onClick={true}>
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(`rgb(${stop.color})`)
                    }}
                    className="  mx-2 mb-1 cursor-pointer rounded-md py-[2px] text-center text-sm font-semibold text-slate-200 duration-300 hover:bg-darkJungle-900"
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
