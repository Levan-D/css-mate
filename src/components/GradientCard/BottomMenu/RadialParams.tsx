/** @format */

import React, { useState } from "react"
import ReactSlider from "react-slider"

type Props = {
  handleShapeChange: () => void
  radialParams: {
    shape: string
    coords: {
      x: number
      y: number
    }
  }
  setRadialParams: React.Dispatch<
    React.SetStateAction<{
      shape: string
      coords: {
        x: number
        y: number
      }
    }>
  >
  setEffect: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RadialParams({
  handleShapeChange,
  radialParams,
  setRadialParams,
  setEffect,
}: Props) {
  return (
    <div className=" m-1.5  flex  justify-center gap-2    ">
      <div
        onClick={handleShapeChange}
        className={`  btnSecondary  h-8 px-2 text-sm leading-4`}
      >
        <div
          className={` ${
            radialParams.shape === "circle" ? "mx-1 h-5 w-5" : "h-5 w-7"
          }  mt-[2px] translate-y-[-4px]  rounded-full border-2 border-slate-900`}
        ></div>
      </div>

      <div className=" z-50 flex -translate-y-2 gap-4 px-2">
        {Object.entries(radialParams.coords).map((coord, i) => (
          <div key={i} className="mb-2 w-[76px]">
            <div className="text-xs italic text-slate-300">{coord[0]}</div>
            <ReactSlider
              className="customSlider group"
              trackClassName="customSlider-track"
              thumbClassName="customSlider-thumb"
              min={0}
              max={100}
              defaultValue={coord[1]}
              renderThumb={(props, state) => (
                <div style={{ background: "black" }} {...props}>
                  <div className="collapse w-10 translate-y-[-30px] translate-x-[-10px] select-none rounded-lg border-2  bg-darkJungle-700  text-center group-hover:visible  sm:hidden sm:group-hover:block">
                    {state.valueNow}
                  </div>
                </div>
              )}
              value={coord[1]}
              onChange={value => {
                setRadialParams({
                  ...radialParams,
                  coords: {
                    ...radialParams.coords,
                    [coord[0]]: value,
                  },
                })
                setEffect(() => true)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
