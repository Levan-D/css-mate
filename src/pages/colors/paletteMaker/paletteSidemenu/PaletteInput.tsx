/** @format */

import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import RgbToHex from "../../../../utils/RGBToHex"
import HexToRGB from "../../../../utils/HexToRGB"
import { setStart, setEnd } from "../paletteSlice"
//@ts-ignore
import { ChromePicker } from "react-color"
import ColorInverter from "../../../../utils/ColorInverter"
import { color } from "../../../../components/ColorPicker"

export default function PaletteInput() {
  const dispatch = useAppDispatch()
  const { colorStart, colorEnd } = useAppSelector(store => store.palette)
  const [displayColorPickerSt, setDisplayColorPickerSt] = useState(false)
  const [displayColorPickerEn, setDisplayColorPickerEn] = useState(false)
  const [tempStart, setTempStart] = useState("")
  const [tempEnd, setTempEnd] = useState("")

  const [colorSt, setColorSt] = useState({
    hex: `#5ea1ff`,
    rgb: {
      r: 94,
      g: 161,
      b: 255,
      a: 1,
    },
    hsl: {
      h: 215,
      s: 100,
      l: 68,
      a: 1,
    },
  })

  const [colorEn, setColorEn] = useState({
    hex: `#ff725e`,
    rgb: {
      r: 255,
      g: 114,
      b: 94,
      a: 1,
    },
    hsl: {
      h: 7,
      s: 100,
      l: 68,
      a: 1,
    },
  })

  const handleChangeSt = (color: color) => {
    setColorSt(color)
  }

  const handleChangeCompleteSt = (color: color) => {
    dispatch(setStart(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`))
  }

  const handleClickSt = () => {
    setDisplayColorPickerSt(!displayColorPickerSt)
    setColorSt(colorSt)
    dispatch(setStart(`${colorSt.rgb.r},${colorSt.rgb.g},${colorSt.rgb.b}`))
  }

  const handleCloseSt = () => {
    setDisplayColorPickerSt(false)
  }

  const handleChangeEn = (color: color) => {
    setColorEn(color)
  }

  const handleChangeCompleteEn = (color: color) => {
    dispatch(setEnd(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`))
  }

  const handleClickEn = () => {
    setDisplayColorPickerEn(!displayColorPickerEn)
    setColorEn(colorEn)
    dispatch(setEnd(`${colorEn.rgb.r},${colorEn.rgb.g},${colorEn.rgb.b}`))
  }

  const handleCloseEn = () => {
    setDisplayColorPickerEn(false)
  }

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
          <div
            onClick={handleClickSt}
            style={{
              background: colorSt.hex,
              color: ColorInverter(colorSt.hex, `bw`),
            }}
            className={`h-20 w-full cursor-pointer select-none rounded-lg border-2 border-transparent  leading-[18px] duration-200 sm:hover:border-white`}
          ></div>
          {displayColorPickerSt ? (
            <div className="absolute z-10 select-none">
              <div
                className="fixed top-0 right-0 bottom-0  left-0  "
                onMouseDown={handleCloseSt}
              />
              <div className="translate-x-10   ">
                <ChromePicker
                  disableAlpha={true}
                  color={colorSt}
                  onChange={handleChangeSt}
                  onChangeComplete={handleChangeCompleteSt}
                />
              </div>
            </div>
          ) : null}
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
          <div
            onClick={handleClickEn}
            style={{
              background: colorEn.hex,
              color: ColorInverter(colorEn.hex, `bw`),
            }}
            className={`h-20 w-full cursor-pointer select-none rounded-lg border-2 border-transparent  leading-[18px] duration-200 sm:hover:border-white`}
          ></div>
          {displayColorPickerEn ? (
            <div className="absolute z-10 select-none">
              <div
                className="fixed top-0 right-0 bottom-0  left-0  "
                onMouseDown={handleCloseEn}
              />
              <div className="translate-x-10   ">
                <ChromePicker
                  disableAlpha={true}
                  color={colorEn}
                  onChange={handleChangeEn}
                  onChangeComplete={handleChangeCompleteEn}
                />
              </div>
            </div>
          ) : null}
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
