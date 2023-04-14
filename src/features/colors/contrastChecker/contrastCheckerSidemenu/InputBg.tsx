/** @format */

import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setBackgroundColor } from "../contrastCheckerSlice"
//@ts-ignore
import { ChromePicker, SwatchesPicker } from "react-color"

export default function InputBg() {
  const { backgroundColor } = useAppSelector(store => store.contrastChecker)
  const dispatch = useAppDispatch()
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [displaySwatchesOne, setDisplaySwatchesOne] = useState(false)
  const [color, setColor] = useState("")

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }

  const handleChange = (color: ChromePickerType) => {
    dispatch(setBackgroundColor(`${color.hex}`))
    setColor("")
  }

  const handleOnBlur = () => {
    const colorRegex = /^#[0-9A-F]{6}$/i
    let newHex = color
    newHex.replace(/\s+/g, "")

    if (!newHex.startsWith("#")) {
      newHex = "#" + newHex
    }

    if (colorRegex.test(newHex)) {
      dispatch(setBackgroundColor(newHex))
    }
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnBlur()
      setColor("")
    }
  }

  return (
    <div className="menuContainer m-4    ">
      <div className="menuHeader     bg-slate-500 bg-opacity-10 px-4 pb-1">
        <div className="basis-[15%] text-center text-xs italic  text-slate-300 ">
          Background
        </div>
      </div>

      <div className="m-2 flex gap-2">
        {/* color picker */}
        <div>
          <div
            onClick={handleClick}
            style={{
              background: backgroundColor,
            }}
            className={`h-10 w-20 cursor-pointer select-none rounded-lg border-2 border-transparent  leading-[18px] duration-200 sm:hover:border-white`}
          ></div>
          {displayColorPicker ? (
            <div className="absolute z-10 select-none">
              <div
                className="fixed top-0 right-0 bottom-0  left-0  "
                onMouseDown={() => setDisplayColorPicker(false)}
              />
              <div className="translate-x-10   ">
                <ChromePicker
                  disableAlpha={true}
                  color={backgroundColor}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : null}
        </div>
        {/* color picker */}
        {/* hex color input */}
        <input
          type="text"
          id="hexText"
          value={color}
          placeholder={backgroundColor}
          onChange={e => setColor(e.target.value)}
          onKeyDown={handleOnKeyDown}
          onBlur={handleOnBlur}
          className=" block h-10 w-28   rounded-md border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-slate-300  duration-200 sm:hover:border-slate-300  "
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
              <SwatchesPicker width={280} height={280} onChange={handleChange} />
            </div>
          </div>
        ) : null}
      </div>
      {/* hex color input */}
    </div>
  )
}
