/** @format */

import React from "react"
import ReactSlider from "react-slider"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setStops } from "../paletteSlice"

export default function PaletteSlider() {
  const dispatch = useAppDispatch()
  const { stops } = useAppSelector(store => store.palette)

  const handlePropertyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value)

    if (value > 20) {
      value = 20
    } else if (value < 1) {
      value = 1
    }

    dispatch(setStops(value))
  }

  return (
    <div className="menuBlock m-2 flex p-2 pt-2 pb-2">
      <div className="mx-1 mr-4  basis-5/6 translate-y-3">
        <ReactSlider
          className="customSlider"
          trackClassName="customSlider-track"
          thumbClassName="customSlider-thumb"
          min={1}
          max={20}
          value={stops}
          renderThumb={(props, state) => (
            <div style={{ background: "black" }} {...props}>
              <div
                style={{
                  backgroundColor: "#5ea1ff",
                  color: "white",
                  borderColor: "white",
                }}
                className="w-10 translate-y-[-30px] translate-x-[-10px] select-none rounded-lg border-2 bg-slate-300 text-center"
              >
                {state.valueNow}
              </div>
            </div>
          )}
          onAfterChange={value => dispatch(setStops(value))}
        />
      </div>
      <div className="basis-1/6">
        <input
          type="number"
          min={0}
          max={20}
          value={stops}
          onChange={e => handlePropertyChange(e)}
          className="h-10 w-14 rounded-md bg-darkJungle-300  pl-3 text-center  "
        />
      </div>
    </div>
  )
}
