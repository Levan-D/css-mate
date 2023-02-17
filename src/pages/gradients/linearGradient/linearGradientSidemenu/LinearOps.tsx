/** @format */

import React, { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setLinearDegree } from "../linearGradientSlice"

const LinearOps = () => {
  const dispatch = useAppDispatch()
  const {
    linearParams: { degree },
  } = useAppSelector(store => store.linearGradient)

  const [tempLinearDeg, setTempLinearDeg] = useState<number | string>("")
  const [visibility, setVisibility] = useState(false)

  const directionArray = [1, 2, 3, 4]

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
      dispatch(setLinearDegree(tempLinearDeg))
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
    <div className="menuBlock m-2 flex grow justify-around px-2 py-1">
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
        onClick={() => setVisibility(x => !x)}
        className="duration-2000 cursor-pointer select-none italic leading-7 text-slate-300 sm:hover:text-white "
      >
        deg
      </div>

      {visibility && (
        <div>
          <div
            onClick={() => setVisibility(() => false)}
            className="absolute top-0 left-0 z-40 h-screen w-screen "
          ></div>
          <div className="menuBlock absolute z-50 flex translate-y-8 translate-x-[-70px] gap-4 border-slate-500 bg-darkJungle-400 px-4 py-2">
            <div>
              {directionArray.map((btn, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setVisibility(x => !x)
                    dispatch(setLinearDegree(0 + i * 45))
                  }}
                  className={`h-6 w-6 rotate-[${
                    90 + i * 45
                  }deg] cursor-pointer rounded-full border-2  border-transparent text-2xl font-bold leading-[14px] sm:hover:border-white`}
                >
                  &#8592;
                </div>
              ))}
            </div>
            <div>
              {directionArray.map((btn, i) => (
                <div
                  onClick={() => {
                    setVisibility(x => !x)
                    dispatch(setLinearDegree(180 + i * 45))
                  }}
                  className={`h-6 w-6 rotate-[${
                    i !== 3 ? 270 + i * 45 : 45
                  }deg] cursor-pointer rounded-full border-2  border-transparent text-2xl font-bold leading-[14px] sm:hover:border-white`}
                >
                  &#8592;
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LinearOps
