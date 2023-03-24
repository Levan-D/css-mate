/** @format */

import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import RgbToHex from "../../../../utils/RGBToHex"
import HexToRGB from "../../../../utils/HexToRGB"
import { setStart, setEnd, setReset } from "../paletteMixerSlice"
//@ts-ignore
import { ChromePicker, SwatchesPicker } from "react-color"
import { color } from "../../../../components/ColorPicker"

export default function PaletteInput() {
  const dispatch = useAppDispatch()
  const { colorStart, colorEnd, reset } = useAppSelector(store => store.paletteMixer)

  const [displayColorPickerSt, setDisplayColorPickerSt] = useState(false)
  const [displayColorPickerEn, setDisplayColorPickerEn] = useState(false)

  const [displaySwatchesOne, setDisplaySwatchesOne] = useState(false)
  const [displaySwatchesTwo, setDisplaySwatchesTwo] = useState(false)

  const [tempStart, setTempStart] = useState("")
  const [tempEnd, setTempEnd] = useState("")

  const [colorSt, setColorSt] = useState(RgbToHex(colorStart))
  const [colorEn, setColorEn] = useState(RgbToHex(colorEnd))
  console.log(colorSt)
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
    setColorSt(color.hex)
  }

  const handleClickSt = () => {
    setDisplayColorPickerSt(!displayColorPickerSt)
    setColorSt(colorSt)
    dispatch(setStart(`${HexToRGB(colorSt)}`))
  }

  const handleChangeEn = (color: color) => {
    setColorEn(color.hex)
  }

  const handleChangeCompleteEn = (color: color) => {
    dispatch(setEnd(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`))
    setColorEn(color.hex)
  }

  const handleClickEn = () => {
    setDisplayColorPickerEn(!displayColorPickerEn)
    setColorEn(colorEn)
    dispatch(setEnd(`${HexToRGB(colorEn)}`))
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
        setColorEn(newHex)
        setTempEnd("")
      } else if (type === "start") {
        dispatch(setStart(HexToRGB(newHex)))
        setTempStart("")
        setColorSt(newHex)
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
            }}
            className={`h-20 w-full cursor-pointer select-none rounded-lg border-2 border-transparent  leading-[18px] duration-200 sm:hover:border-white`}
          ></div>
          {displayColorPickerSt ? (
            <div className="absolute z-10 select-none">
              <div
                className="fixed top-0 right-0 bottom-0  left-0  "
                onMouseDown={() => setDisplayColorPickerSt(false)}
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
        <div className=" mx-2 mb-2 flex gap-2">
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

          <div
            onClick={() => setDisplaySwatchesOne(true)}
            className="btnSecondary w-full text-center"
          >
            Swatches
          </div>

          {displaySwatchesOne ? (
            <div className="absolute z-10 select-none">
              <div
                className="fixed top-0 right-0 bottom-0  left-0  "
                onMouseDown={() => setDisplaySwatchesOne(false)}
              />
              <div className="translate-x-4 translate-y-10 rounded-md border-2">
                <SwatchesPicker
                  width={280}
                  height={280}
                  onChange={handleChangeCompleteSt}
                />
              </div>
            </div>
          ) : null}
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
            }}
            className={`h-20 w-full cursor-pointer select-none rounded-lg border-2 border-transparent  leading-[18px] duration-200 sm:hover:border-white`}
          ></div>
          {displayColorPickerEn ? (
            <div className="absolute z-10 select-none">
              <div
                className="fixed top-0 right-0 bottom-0  left-0  "
                onMouseDown={() => setDisplayColorPickerEn(false)}
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
        <div className=" mx-2 mb-2 flex gap-2">
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

          <div
            onClick={() => setDisplaySwatchesTwo(true)}
            className="btnSecondary w-full text-center"
          >
            Swatches
          </div>

          {displaySwatchesTwo ? (
            <div className="absolute z-10 select-none">
              <div
                className="fixed top-0 right-0 bottom-0  left-0  "
                onMouseDown={() => setDisplaySwatchesTwo(false)}
              />
              <div className="translate-x-4 translate-y-10 rounded-md border-2">
                <SwatchesPicker
                  width={280}
                  height={280}
                  onChange={handleChangeCompleteEn}
                />
              </div>
            </div>
          ) : null}
        </div>
        {/* hex color input */}
      </div>
    </div>
  )
}
