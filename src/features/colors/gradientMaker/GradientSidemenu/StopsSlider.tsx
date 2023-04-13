/** @format */

import React from "react"
import ReactSlider from "react-slider"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setStopPercentage } from "../gradientSlice"
import RgbToHex from "../../../../utils/colors/RGBToHex"
import ColorInverter from "../../../../utils/colors/ColorInverter"

const StopsSlider = () => {
  const dispatch = useAppDispatch()
  const { stops } = useAppSelector(store => store.Gradient)
  const stopArray = stops.map(stop => stop.stop.percent)

  return (
    <div className="menuBlock m-2 p-2 pt-9 pb-6">
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
                backgroundColor: RgbToHex(stops[state.index].stop.color),
                color: ColorInverter(RgbToHex(stops[state.index].stop.color), "bw"),
                borderColor: ColorInverter(RgbToHex(stops[state.index].stop.color), "bw"),
              }}
              className="w-10 translate-y-[-30px] translate-x-[-10px] select-none rounded-lg border-2 bg-slate-300 text-center"
            >
              {state.valueNow}
            </div>
          </div>
        )}
        onChange={(value, i) => {
          dispatch(
            setStopPercentage({
              index: i,
              percent: value[i],
            })
          )
        }}
        value={stopArray}
      />
    </div>
  )
}

export default StopsSlider
