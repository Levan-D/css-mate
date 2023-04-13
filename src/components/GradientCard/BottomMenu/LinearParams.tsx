/** @format */

import React, { useState } from "react"

type Props = {
  linearParams: { degree: number }
  setLinearParams: React.Dispatch<
    React.SetStateAction<{
      degree: number
    }>
  >
  setEffect: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LinearParams({
  linearParams,
  setLinearParams,
  setEffect,
}: Props) {
  const [tempLinearDeg, setTempLinearDeg] = useState<number | string>("")

  const handleOnKeyDownStop = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnBLurStop()
      setTempLinearDeg("")
      e.currentTarget.blur()
    }
  }

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
      setLinearParams({
        degree: tempLinearDeg,
      })
      setEffect(() => true)

      setTempLinearDeg("")
    }
  }

  return (
    <div className=" m-1.5  flex  justify-center gap-2    ">
      <input
        type="number"
        id="stopInput"
        value={tempLinearDeg}
        placeholder={linearParams.degree.toString()}
        onBlur={() => handleOnBLurStop()}
        onFocus={() => setTempLinearDeg(Number(linearParams.degree))}
        onChange={e => HandleStopPercentage(e)}
        onKeyDown={e => handleOnKeyDownStop(e)}
        className="  removeArrow block h-8 w-20 appearance-none rounded-md  border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-white duration-200 sm:hover:border-slate-300  "
      ></input>
    </div>
  )
}
