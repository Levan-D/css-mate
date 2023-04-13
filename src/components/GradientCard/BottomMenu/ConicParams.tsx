/** @format */

import React, { useState } from "react"
import ReactSlider from "react-slider"

type Props = {
  setEffect: React.Dispatch<React.SetStateAction<boolean>>
  conicParams: {
    degree: number
    coords: {
      x: number
      y: number
    }
  }
  setConicParams: React.Dispatch<
    React.SetStateAction<{
      degree: number
      coords: {
        x: number
        y: number
      }
    }>
  >
}

export default function ConicParams({ conicParams, setConicParams, setEffect }: Props) {
  const [tempConicDeg, setTempConicDeg] = useState<number | string>("")
  const HandleStopPercentage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value)

    if (value > 360) {
      value = 360
    } else if (value < 0) {
      value = 0
    }

    setTempConicDeg(value)
  }

  const handleOnBLurStop = () => {
    if (typeof tempConicDeg === "number") {
      setConicParams({
        ...conicParams,
        degree: tempConicDeg,
      })
      setEffect(() => true)

      setTempConicDeg("")
    }
  }

  const handleOnKeyDownStop = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnBLurStop()
      setTempConicDeg("")
      e.currentTarget.blur()
    }
  }
  return (
    <div className=" m-1.5  flex  justify-center gap-2    ">
      <input
        type="number"
        id="stopInput"
        value={tempConicDeg}
        placeholder={conicParams.degree.toString()}
        onBlur={() => handleOnBLurStop()}
        onFocus={() => setTempConicDeg(Number(conicParams.degree))}
        onChange={e => HandleStopPercentage(e)}
        onKeyDown={e => handleOnKeyDownStop(e)}
        className="  removeArrow block h-8 w-10 appearance-none rounded-md  border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-white duration-200 sm:hover:border-slate-300  "
      ></input>

      <div className=" z-50 flex -translate-y-2 gap-4 px-2">
        {Object.entries(conicParams.coords).map((coord, i) => (
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
                setConicParams({
                  ...conicParams,
                  coords: {
                    ...conicParams.coords,
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
