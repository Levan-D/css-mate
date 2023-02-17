/** @format */

import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setConicDegree, setConicCoords } from "../linearGradientSlice"
import ReactSlider from "react-slider"

const ConicOps = () => {
  const dispatch = useAppDispatch()
  const {
    conicParams: { degree, coords },
  } = useAppSelector(store => store.linearGradient)

  const [coordsVisi, setCoordsVisi] = useState(false)
  const [tempLinearDeg, setTempLinearDeg] = useState<number | string>("")

  const HandleStopPercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value)

    if (value > 360) {
      value = 360
    } else if (value < 0) {
      value = 0
    }

    setTempLinearDeg(value)
  }

  const handleOnBLurStop = () => {
    if (typeof tempLinearDeg === "number") {
      dispatch(setConicDegree(tempLinearDeg))
      setTempLinearDeg("")
    }
  }

  const handleOnKeyDownStop = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnBLurStop()
      setTempLinearDeg("")
      e.currentTarget.blur()
    }
  }

  return (
    <div className="menuBlock m-2 flex grow  px-2 py-1">
      <input
        type="number"
        id="stopInput"
        value={tempLinearDeg}
        placeholder={degree.toString()}
        onBlur={() => handleOnBLurStop()}
        onFocus={() => setTempLinearDeg(Number(degree))}
        onChange={e => HandleStopPercentage(e)}
        onKeyDown={e => handleOnKeyDownStop(e)}
        className="  removeArrow block h-8 w-10 appearance-none rounded-md  border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-white duration-200 sm:hover:border-slate-300  "
      ></input>

      <div
        onClick={() => setCoordsVisi(x => !x)}
        className="duration-2000 grow cursor-pointer select-none text-center italic leading-7 text-slate-300 sm:hover:text-white "
      >
        Cords
      </div>

      {coordsVisi && (
        <div>
          <div
            onClick={() => setCoordsVisi(() => false)}
            className="absolute top-0 left-0 z-40 h-screen w-screen "
          ></div>
          <div className="menuBlock absolute z-50 w-32 translate-y-8 translate-x-[-80px] gap-4 border-slate-500 bg-darkJungle-400 px-1  ">
            <div className="flex justify-end   ">
              <div
                className="z-50 my-1   h-6 w-6 cursor-pointer rounded-full  border-2 border-transparent text-center leading-5 text-slate-300 sm:hover:border-slate-300"
                onClick={() => dispatch(setConicCoords({ x: 50, y: 50 }))}
              >
                &#8634;
              </div>
              <div
                className="z-50 my-1  h-6 w-6 cursor-pointer rounded-full border-2  border-transparent text-center text-xl leading-4 text-slate-300 sm:hover:border-slate-300"
                onClick={() => setCoordsVisi(() => false)}
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
                      dispatch(setConicCoords({ ...coords, [coord[0]]: value }))
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

export default ConicOps
