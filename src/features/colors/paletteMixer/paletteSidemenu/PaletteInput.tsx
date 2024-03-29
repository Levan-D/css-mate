/** @format */

import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import dice from "../../../../assets/icons/dice.png"
import RgbToHex from "../../../../utils/colors/RGBToHex"
import HexToRGB from "../../../../utils/colors/HexToRGB"
import { setStart, setEnd, setReset } from "../paletteMixerSlice"
//@ts-ignore
import { ChromePicker, SwatchesPicker } from "react-color"
import RandomColorGenerator from "../../../../utils/colors/RandomColorGenerator"

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

  useEffect(() => {
    setColorSt(RgbToHex(colorStart))
    setColorEn(RgbToHex(colorEnd))
    dispatch(setReset())
  }, [reset])

  const handleChange = (color: ChromePickerType, type: "end" | "start") => {
    if (type === "start") {
      setColorSt(color.hex)
    } else if (type === "end") {
      setColorEn(color.hex)
    }
  }

  const handleChangeComplete = (color: ChromePickerType, type: "end" | "start") => {
    if (type === "start") {
      dispatch(setStart(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`))
      setColorSt(color.hex)
    } else if (type === "end") {
      dispatch(setEnd(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`))
      setColorEn(color.hex)
    }
  }

  const handleClick = (type: "end" | "start") => {
    if (type === "start") {
      setDisplayColorPickerSt(!displayColorPickerSt)
      setColorSt(colorSt)
      dispatch(setStart(`${HexToRGB(colorSt)}`))
    } else if (type === "end") {
      setDisplayColorPickerEn(!displayColorPickerEn)
      setColorEn(colorEn)
      dispatch(setEnd(`${HexToRGB(colorEn)}`))
    }
  }

  const handleRandomColor = (type: "end" | "start") => {
    const randomColor = RandomColorGenerator()
    if (type === "start") {
      dispatch(setStart(randomColor))
      setColorSt(RgbToHex(randomColor))
    } else if (type === "end") {
      dispatch(setEnd(randomColor))
      setColorEn(RgbToHex(randomColor))
    }
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
            onClick={() => handleClick("start")}
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
                  onChange={(color: ChromePickerType) => handleChange(color, "start")}
                  onChangeComplete={(color: ChromePickerType) =>
                    handleChangeComplete(color, "start")
                  }
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
            className=" block h-10 w-28   rounded-md border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-slate-300  duration-200 sm:hover:border-slate-300  "
          ></input>
          <div onClick={() => handleRandomColor("start")} className="btnSecondary w-20">
            <img
              src={dice}
              alt="dice icon"
              className="inline-block  w-20  -translate-y-[2px] scale-[2] "
            />
          </div>
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
                  onChangeComplete={(color: ChromePickerType) =>
                    handleChangeComplete(color, "start")
                  }
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
            onClick={() => handleClick("end")}
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
                  onChange={(color: ChromePickerType) => handleChange(color, "end")}
                  onChangeComplete={(color: ChromePickerType) =>
                    handleChangeComplete(color, "end")
                  }
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
            className=" block h-10 w-28   rounded-md border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-slate-300  duration-200 sm:hover:border-slate-300  "
          ></input>

          <div onClick={() => handleRandomColor("end")} className="btnSecondary w-20">
            <img
              src={dice}
              alt="dice icon"
              className="inline-block  w-20  -translate-y-[2px] scale-[2]"
            />
          </div>

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
                  onChangeComplete={(color: ChromePickerType) =>
                    handleChangeComplete(color, "end")
                  }
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
