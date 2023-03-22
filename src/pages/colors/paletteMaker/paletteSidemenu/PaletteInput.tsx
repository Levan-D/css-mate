/** @format */

import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import RgbToHex from "../../../../utils/RGBToHex"
import HexToRGB from "../../../../utils/HexToRGB"
import { setStart, setEnd,setReset } from "../paletteSlice"
//@ts-ignore
import { ChromePicker } from "react-color"
import ColorInverter from "../../../../utils/ColorInverter"
import { color } from "../../../../components/ColorPicker"

export default function PaletteInput() {
  const dispatch = useAppDispatch()
  const { colorStart, colorEnd, reset } = useAppSelector(store => store.palette)

  const [displayColorPickerSt, setDisplayColorPickerSt] = useState(false)
  const [displayColorPickerEn, setDisplayColorPickerEn] = useState(false)

  const [tempStart, setTempStart] = useState("")
  const [tempEnd, setTempEnd] = useState("")

  const [colorSt, setColorSt] = useState(RgbToHex(colorStart))
  const [colorEn, setColorEn] = useState(RgbToHex(colorEnd))

  useEffect(() => {
    setColorSt(RgbToHex(colorStart))
    setColorEn(RgbToHex(colorEnd))
    dispatch(setReset())
  }, [reset])

  const handleChangeSt = (color: color) => {
    setColorSt(color.hex)
  }

  const handleChangeCompleteSt = (color: color) => {
    dispatch(setStart(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`))
  }

  const handleClickSt = () => {
    setDisplayColorPickerSt(!displayColorPickerSt)
    setColorSt(colorSt)
    dispatch(setStart(`${HexToRGB(colorSt)}`))
  }

  const handleCloseSt = () => {
    setDisplayColorPickerSt(false)
  }

  const handleChangeEn = (color: color) => {
    setColorEn(color.hex)
  }

  const handleChangeCompleteEn = (color: color) => {
    dispatch(setEnd(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`))
  }

  const handleClickEn = () => {
    setDisplayColorPickerEn(!displayColorPickerEn)
    setColorEn(colorEn)
    dispatch(setEnd(`${HexToRGB(colorEn)}`))
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
              background: colorSt,
              color: ColorInverter(colorSt, `bw`),
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
              background: colorEn,
              color: ColorInverter(colorEn, `bw`),
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
