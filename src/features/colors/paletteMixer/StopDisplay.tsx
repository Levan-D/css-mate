/** @format */

import { useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { selectInbetweenColors } from "./paletteMixerSlice"
import RgbToHex from "../../../utils/colors/RGBToHex"
import ColorCard from "../../../components/ColorCard"
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
        <div className="mr-20 basis-[15%] text-center font-cursiveCustom text-lg  italic text-slate-300">
          Shades
        </div>
        <div></div>
      </div>
      <div className="m-2 flex  flex-wrap justify-center gap-2">
        {stops.map((stop, i) => {
          if (typeof stop === "object" && stop.color !== undefined) {
            return (
              <div key={i}>
                <ColorCard
                  bgColor={stop.color}
                  hex={RgbToHex(stop.color)}
                  rgb={stop.color}
                  colorName={stop.name}
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
                            {
                              ContrastChecker(
                                RgbToHex(stop.color),
                                "#000000",
                                toggleBold,
                                false
                              ).ratio
                            }
                          </span>
                          &#32;
                          <span>
                            {
                              ContrastChecker(
                                RgbToHex(stop.color),
                                "#000000",
                                toggleBold,
                                false
                              ).rating
                            }
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
                            {
                              ContrastChecker(
                                RgbToHex(stop.color),
                                "#ffffff",
                                toggleBold,
                                false
                              ).ratio
                            }
                          </span>
                          &#32;
                          <span>
                            {
                              ContrastChecker(
                                RgbToHex(stop.color),
                                "#ffffff",
                                toggleBold,
                                false
                              ).rating
                            }
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </ColorCard>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
