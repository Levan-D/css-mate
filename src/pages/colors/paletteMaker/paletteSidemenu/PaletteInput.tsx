/** @format */

import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import RgbToHex from "../../../../utils/RGBToHex"
import HexToRGB from "../../../../utils/HexToRGB"
import { setStart, setEnd } from "../paletteSlice"

export default function PaletteInput() {
  const dispatch = useAppDispatch()
  const { colorStart, colorEnd } = useAppSelector(store => store.palette)

  const [tempStart, setTempStart] = useState("")
  const [tempEnd, setTempEnd] = useState("")

  const handleOnBlur = (type: "end" | "start") => {
    const colorRegex = /^#[0-9A-F]{6}$/i
    let newHex = type === "end" ? tempEnd : tempStart
    newHex.replace(/\s+/g, "")

    if (!newHex.startsWith("#")) {
      newHex = "#" + newHex
    }

    if (colorRegex.test(newHex)) {
      if (type === "end") {
        dispatch(setEnd(HexToRGB(newHex)))
        setTempEnd("")
      } else if (type === "start") {
        dispatch(setStart(HexToRGB(newHex)))
        setTempStart("")
      }
    }
  }

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: "end" | "start"
  ) => {
    if (e.key === "Enter") {
      handleOnBlur(type)
      if (type === "end") {
        setTempEnd("")
      } else if (type === "start") {
        setTempStart("")
      }
    }
  }

  return (
    <div>
      <div className="   menuContainer m-2  my-4  bg-slate-500 bg-opacity-10">
        <div className="menuHeader     bg-slate-500 bg-opacity-10 px-4 pb-1">
          <div className="basis-[15%] text-center text-xs italic  text-slate-300 ">
            First shade
          </div>
        </div>
        {/* color picker */}
        <div className="  m-2 ">
          <input
            type="color"
            id="colorpicker"
            value={RgbToHex(colorStart)}
            onChange={e => dispatch(setStart(HexToRGB(e.target.value)))}
            style={{ backgroundColor: `rgb(${colorStart})` }}
            className="  block h-20 w-full cursor-pointer rounded-md   border-2 border-darkJungle-400  duration-200  sm:hover:border-slate-300"
          ></input>
        </div>
        {/* color picker */}

        {/* hex color input */}
        <div className=" mx-2 mb-2">
          <input
            type="text"
            id="hexText"
            value={tempStart}
            placeholder={RgbToHex(colorStart)}
            onChange={e => setTempStart(e.target.value)}
            onKeyDown={e => handleOnKeyDown(e, "start")}
            onBlur={() => handleOnBlur("start")}
            className=" block h-10 w-40   rounded-md border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-slate-300  duration-200 sm:hover:border-slate-300  "
          ></input>
        </div>
        {/* hex color input */}
      </div>

      <div className="   menuContainer   m-2  bg-slate-500 bg-opacity-10">
        <div className="menuHeader     bg-slate-500 bg-opacity-10 px-4 pb-1">
          <div className="basis-[15%] text-center text-xs italic  text-slate-300 ">
            Last shade
          </div>
        </div>
        {/* color picker */}
        <div className="  m-2 ">
          <input
            type="color"
            id="colorpicker"
            value={RgbToHex(colorEnd)}
            onChange={e => dispatch(setEnd(HexToRGB(e.target.value)))}
            style={{ backgroundColor: `rgb(${colorEnd})` }}
            className="  block h-20 w-full cursor-pointer rounded-md  border-2 border-darkJungle-400   duration-200  sm:hover:border-slate-300"
          ></input>
        </div>
        {/* color picker */}

        {/* hex color input */}
        <div className=" mx-2 mb-2">
          <input
            type="text"
            id="hexText"
            value={tempEnd}
            placeholder={RgbToHex(colorEnd)}
            onChange={e => setTempEnd(e.target.value)}
            onKeyDown={e => handleOnKeyDown(e, "end")}
            onBlur={() => handleOnBlur("end")}
            className=" block h-10 w-40   rounded-md border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-slate-300  duration-200 sm:hover:border-slate-300  "
          ></input>
        </div>
        {/* hex color input */}
      </div>
    </div>
  )
}
