/** @format */

import React from "react"

import RgbToHex from "../../../utils/colors/RGBToHex"
import ColorInverter from "../../../utils/colors/ColorInverter"
import ReactSlider from "react-slider"

type Props = {
  stopsData: {
    id: string
    stop: {
      percent: number
      color: string
      opacity: number
    }
  }[]

  handleStopsChange: (value: number[], i: number) => void
}

export default function StopSlider({ stopsData, handleStopsChange }: Props) {
  const stopArray = stopsData.map(stop => stop.stop.percent)

  return (
    <div className=" m-2 flex h-[28px]  justify-center  gap-2  ">
      <div className="z-40 w-[220px] translate-y-2">
        <ReactSlider
          className="customSlider"
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          min={0}
          max={100}
          snapDragDisabled
          minDistance={1}
          defaultValue={stopArray}
          renderThumb={(props, state) => (
            <div style={{ background: "black" }} {...props}>
              <div
                style={{
                  backgroundColor: RgbToHex(stopsData[state.index].stop.color),
                  color: ColorInverter(RgbToHex(stopsData[state.index].stop.color), "bw"),
                  borderColor: ColorInverter(
                    RgbToHex(stopsData[state.index].stop.color),
                    "bw"
                  ),
                }}
                className="z-40 w-7 translate-y-[-20px] translate-x-[-5px] select-none rounded-lg border-2 bg-slate-300 text-center text-xs"
              >
                {state.valueNow}
              </div>
            </div>
          )}
          onChange={handleStopsChange}
          value={stopArray}
        />
      </div>
    </div>
  )
}
