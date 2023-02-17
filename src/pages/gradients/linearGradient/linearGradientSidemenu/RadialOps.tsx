/** @format */

import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setRadialShape, setRadialCoords } from "../linearGradientSlice"
import ReactSlider from "react-slider"

const RadialOps = () => {
  const dispatch = useAppDispatch()
  const {
    radialParams: { shape, coords },
  } = useAppSelector(store => store.linearGradient)

  const [visibility, setVisibility] = useState(false)

  const handleShapeChange = () => {
    if (shape === "circle") {
      dispatch(setRadialShape("ellipse"))
    } else if (shape === "ellipse") {
      dispatch(setRadialShape("circle"))
    }
  }

  return (
    <div className="menuBlock m-2 flex grow  px-2 py-1">
      <div
        onClick={handleShapeChange}
        className={`  btnSecondary  h-8 px-2 text-sm leading-4`}
      >
        <div
          className={` ${
            shape === "circle" ? "mx-1 h-5 w-5" : "h-5 w-7"
          }  mt-[2px] translate-y-[-4px]  rounded-full border-2 border-slate-900`}
        ></div>
      </div>
      <div
        onClick={() => setVisibility(x => !x)}
        className="duration-2000 grow cursor-pointer select-none text-center italic leading-7 text-slate-300 sm:hover:text-white "
      >
        Cords
      </div>

      {visibility && (
        <div>
          <div
            onClick={() => setVisibility(() => false)}
            className="absolute top-0 left-0 z-40 h-screen w-screen "
          ></div>
          <div className="menuBlock absolute z-50 w-32 translate-y-8 translate-x-[-80px] gap-4 border-slate-500 bg-darkJungle-400 px-1  ">
            <div className="flex justify-end ">
              <div
                className="z-50 my-1  h-6 w-6 cursor-pointer rounded-full  border-2 border-transparent text-center leading-5 text-slate-300 sm:hover:border-slate-300"
                onClick={() => dispatch(setRadialCoords({ x: 50, y: 50 }))}
              >
                &#8634;
              </div>
              <div
                className="z-50 my-1  h-6 w-6 cursor-pointer rounded-full border-2  border-transparent text-center text-xl leading-4 text-slate-300 sm:hover:border-slate-300"
                onClick={() => setVisibility(() => false)}
              >
                &#215;
              </div>
            </div>

            <div className="translate-y-[-12px] px-2">
              {Object.entries(coords).map((coord, i) => (
                <div key={i} className="mb-6">
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
                        <div className="w-10 translate-y-[-30px] translate-x-[-10px] select-none rounded-lg border-2 bg-darkJungle-700  text-center  sm:hidden sm:group-hover:block">
                          {state.valueNow}
                        </div>
                      </div>
                    )}
                    value={coord[1]}
                    onChange={value =>
                      dispatch(setRadialCoords({ ...coords, [coord[0]]: value }))
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RadialOps
