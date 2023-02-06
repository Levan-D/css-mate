/** @format */

import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { updateTextShadow } from "../textShadowSlice"
import ReactSlider from "react-slider"

const Sliders = () => {
  const dispatch = useAppDispatch()
  const { textShadowData, currentTab } = useAppSelector(state => state.textShadow)

  const handlePropertyChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    let value = Number(e.target.value)

    if (name === "opacity") {
      value = value * 100
    }

    if (name === "vertical" || name === "horizontal") {
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
      updateTextShadow({
        value: value,
        name: name,
      })
    )
  }

  return (
    <div>
      {textShadowData.map((textShadow, index) => (
        <div key={index}>
          {currentTab === index &&
            Object.entries(textShadow.settings).map((property, i) => {
              if (property[0] !== "shadowColor" && property[0] !== "inset") {
                return (
                  <div key={i} className="menuBlock m-2 h-8 min-w-max p-2 pb-14 ">
                    <div className="flex  justify-between ">
                      <h2>
                        {property[0].charAt(0).toUpperCase() + property[0].slice(1)}{" "}
                        &#160;
                        {property[0] !== "opacity" ? (
                          <span className="text-sm italic text-slate-400 ">
                            &#40;&#32;px&#32;&#41;
                          </span>
                        ) : (
                          <span className="text-sm italic text-slate-400">
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
                            className="w-14 rounded-md  bg-darkJungle-300 text-center md:text-right"
                          />
                        ) : (
                          <input
                            type="number"
                            value={property[1]}
                            onChange={e => handlePropertyChange(e, property[0])}
                            className="w-14 rounded-md  bg-darkJungle-300 text-center  md:text-right"
                          />
                        )}
                      </h2>
                    </div>
                    <div className=" w-fill h-[20px] py-2">
                      <ReactSlider
                        className="customSlider"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        min={
                          property[0] === "horizontal" || property[0] === "vertical"
                            ? -150
                            : 0
                        }
                        max={property[0] === "opacity" ? 100 : 150}
                        defaultValue={property[1]}
                        value={property[1]}
                        onChange={value =>
                          dispatch(updateTextShadow({ value: value, name: property[0] }))
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
