/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { updateBoxShadow } from "../boxShadowSlice"
import ReactSlider from "react-slider"

const Sliders = () => {
  const dispatch = useAppDispatch()
  const { boxShadowData, currentTab } = useAppSelector(state => state.boxShadow)

  const handlePropertyChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    let value = Number(e.target.value)

    if (name === "opacity") {
      value = value * 100
    }

    if (name === "vertical" || name === "horizontal" || name === "spread") {
      if (value > 150) {
        value = 150
      } else if (value < -150) {
        value = -150
      }
    } else if (name === "blur") {
      if (value > 150) {
        value = 150
      } else if (value < 0) {
        value = 0
      }
    } else if (name === "opacity") {
      if (value > 100) {
        value = 100
      } else if (value < 0) {
        value = 0
      }
    }

    dispatch(
      updateBoxShadow({
        value: value,
        name: name,
      })
    )
  }

  return (
    <div>
      {boxShadowData.map((boxShadow, index) => (
        <div key={index}>
          {currentTab === index &&
            Object.entries(boxShadow.settings).map((property, i) => {
              if (property[0] !== "shadowColor" && property[0] !== "inset") {
                return (
                  <div key={i} className="h-8 w-full mb-8 ">
                    <div className="flex justify-between">
                      <h2>
                        {property[0].charAt(0).toUpperCase() + property[0].slice(1)}{" "}
                        &#160;
                        {property[0] !== "opacity" ? (
                          <span className="text-slate-400 text-sm italic ">
                            &#40;&#32;px&#32;&#41;
                          </span>
                        ) : (
                          <span className="text-slate-400 text-sm italic">
                            &#40;&#32;N&#32;&#41;
                          </span>
                        )}
                      </h2>

                      <h2>
                        {property[0] === "opacity" ? (
                          <input
                            type="number"
                            value={property[1] / 100}
                            step={0.01}
                            onChange={e => handlePropertyChange(e, property[0])}
                            className="w-14 text-center  md:text-right bg-slate-700 rounded-md"
                          />
                        ) : (
                          <input
                            type="number"
                            value={property[1]}
                            onChange={e => handlePropertyChange(e, property[0])}
                            className="w-14 text-center  md:text-right bg-slate-700  rounded-md"
                          />
                        )}
                      </h2>
                    </div>
                    <div className=" w-full h-[20px] mb-4">
                      <ReactSlider
                        className="customSlider"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        min={
                          property[0] === "horizontal" ||
                          property[0] === "vertical" ||
                          property[0] === "spread"
                            ? -150
                            : 0
                        }
                        max={property[0] === "opacity" ? 100 : 150}
                        defaultValue={property[1]}
                        value={property[1]}
                        onChange={value =>
                          dispatch(updateBoxShadow({ value: value, name: property[0] }))
                        }
                      />
                    </div>
                  </div>
                )
              }
            })}
        </div>
      ))}
    </div>
  )
}

export default Sliders
