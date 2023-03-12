/** @format */

import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import RgbToHex from "../../../../utils/RGBToHex"
import HexToRGB from "../../../../utils/HexToRGB"
import {
  setStopColor,
  setStopOpacity,
  setStopPercentage,
  deleteStop,
} from "../gradientSlice"
const StopsDisplay = () => {
  const dispatch = useAppDispatch()
  const { stops, offset } = useAppSelector(store => store.linearGradient)

  const [tempHex, setTempHex] = useState({ value: "", index: 0 })
  const [tempStop, setTempStop] = useState({ value: 0, index: 100 })

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    dispatch(
      setStopColor({
        index: i,
        color: HexToRGB((e.target as HTMLInputElement).value),
      })
    )
  }

  const HandleOpacity = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    let value = Math.round(Number(e.target.value) * 100)
    if (value > 100) {
      value = 100
    } else if (value < 0) {
      value = 0
    }

    dispatch(
      setStopOpacity({
        index: i,
        opacity: value,
      })
    )
  }

  const handleOnBLurColor = (i: number) => {
    const colorRegex = /^#[0-9A-F]{6}$/i
    let newHex = tempHex.value.replace(/\s+/g, "")
    if (!newHex.startsWith("#")) {
      newHex = "#" + newHex
    }

    if (colorRegex.test(newHex)) {
      dispatch(
        setStopColor({
          index: i,
          color: HexToRGB(newHex),
        })
      )
      setTempHex({ value: "", index: 0 })
    } else setTempHex({ value: "", index: 0 })
  }

  const handleOnKeyDownColor = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === "Enter" && tempHex.index === i) {
      handleOnBLurColor(i)
      e.currentTarget.blur()
    }
  }

  const HandleStopPercentage = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    let value = Number(e.target.value)

    if (value > 100) {
      value = 100
    } else if (value < 0) {
      value = 0
    }

    setTempStop({ value: value, index: i })
  }

  const handleOnBLurStop = (i: number) => {
    let value = tempStop.value
    if (i === 0) {
      if (value >= stops[1].stop.percent) {
        value = stops[1].stop.percent - offset
      }
    } else if (i + 1 === stops.length) {
      if (value <= stops[stops.length - 2].stop.percent) {
        value = stops[stops.length - 2].stop.percent + offset
      }
    } else if (i > 0 && i < stops.length - 1) {
      if (value <= stops[i - 1].stop.percent) {
        value = stops[i - 1].stop.percent + offset
      }
      if (value >= stops[i + 1].stop.percent) {
        value = stops[i + 1].stop.percent - offset
      }
    }

    dispatch(
      setStopPercentage({
        index: i,
        percent: value,
      })
    )
    setTempStop({ value: 0, index: 100 })
  }

  const handleOnKeyDownStop = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === "Enter" && tempStop.index === i) {
      handleOnBLurStop(i)
      setTempStop({ value: 0, index: 100 })
      e.currentTarget.blur()
    }
  }

  return (
    <div className="mt-4 max-h-[350px] overflow-y-auto">
      <div className="menuContainer mx-2  bg-slate-500 bg-opacity-10">
        <div className="menuHeader flex    bg-slate-500 bg-opacity-10 px-4 pb-1">
          <div className="basis-[15%] text-center text-xs italic  text-slate-300 ">
            Color
          </div>
          <div className="basis-[35%] text-center text-xs italic text-slate-300">HEX</div>
          <div className="basis-[20%] text-center text-xs italic text-slate-300">
            Opacity
          </div>
          <div className="basis-[20%] text-center text-xs italic text-slate-300">
            Stop
          </div>
          <div className="basis-[15%] text-right text-xs italic  text-slate-300">
            Delete
          </div>
        </div>
        {stops.map((stop, i) => (
          <div key={stop.id} className="menuBlock m-2   p-2">
            <div className="flex justify-between">
              {/* color picker */}
              <input
                type="color"
                id="colorpicker"
                value={RgbToHex(stop.stop.color)}
                onChange={e => handleColorChange(e, i)}
                style={{ backgroundColor: `rgb(${stop.stop.color})` }}
                className="  block h-10 w-10 cursor-pointer rounded-md  border-2 border-darkJungle-400  duration-200  sm:hover:border-slate-300"
              ></input>
              {/* color picker */}

              {/* hex color input */}
              <input
                type="text"
                id="hexText"
                value={tempHex.index === i ? tempHex.value : ""}
                placeholder={RgbToHex(stop.stop.color)}
                onBlur={() => handleOnBLurColor(i)}
                onChange={e => setTempHex({ value: e.target.value, index: i })}
                onKeyDown={e => handleOnKeyDownColor(e, i)}
                className=" block h-10 w-20   rounded-md border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-slate-300  duration-200 sm:hover:border-slate-300  "
              ></input>
              {/* hex color input */}

              {/* opacity input */}
              <input
                type="number"
                value={stop.stop.opacity / 100}
                step={0.01}
                onChange={e => HandleOpacity(e, i)}
                className=" removeArrow block h-10 w-10  rounded-md border-2 border-darkJungle-400 bg-darkJungle-600  text-center text-white  duration-200 sm:hover:border-slate-300  "
              />
              {/* opacity input */}

              {/* stop input */}
              <input
                type="number"
                id="stopInput"
                value={tempStop.index === i ? tempStop.value : ""}
                placeholder={stop.stop.percent.toString()}
                onBlur={() => handleOnBLurStop(i)}
                onFocus={() => setTempStop({ value: stop.stop.percent, index: i })}
                onChange={e => HandleStopPercentage(e, i)}
                onKeyDown={e => handleOnKeyDownStop(e, i)}
                className="  removeArrow block h-10 w-10 appearance-none rounded-md  border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-white duration-200 sm:hover:border-slate-300  "
              ></input>
              {/* stop input */}

              <div
                className=" my-1 h-8 w-8 cursor-pointer select-none rounded-full text-center text-4xl font-bold leading-6 text-slate-400 duration-200 sm:hover:bg-blue-300 sm:hover:text-white"
                onClick={() => dispatch(deleteStop(stop.id))}
              >
                &#215;
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StopsDisplay
