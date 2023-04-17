/** @format */

import React from "react"
import { useState } from "react"
import dice from "../../../assets/icons/dice.png"
import RgbToHex from "../../../utils/colors/RGBToHex"
//@ts-ignore
import { ChromePicker, SwatchesPicker } from "react-color"
import RandomColorGenerator from "../../../utils/colors/RandomColorGenerator"
import SideMenu from "../../../components/SideMenu"

type Props = {
  setMainColor: React.Dispatch<React.SetStateAction<string>>
}
export default function PaletteSideMenu({ setMainColor }: Props) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [displaySwatches, setDisplaySwatches] = useState(false)
  const [temp, setTemp] = useState("")
  const [color, setColor] = useState("#5ea1ff")

  const handleChange = (color: ChromePickerType) => {
    setColor(color.hex)
  }

  const handleChangeComplete = (color: ChromePickerType) => {
    setMainColor(color.hex)
    setColor(color.hex)
  }

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
  }

  const handleRandomColor = () => {
    const randomColor = RandomColorGenerator()
    setColor(RgbToHex(randomColor))
    setMainColor(RgbToHex(randomColor))
  }

  const handleOnBlur = () => {
    const colorRegex = /^#[0-9A-F]{6}$/i
    let newHex = temp
    newHex.replace(/\s+/g, "")

    if (!newHex.startsWith("#")) {
      newHex = "#" + newHex
    }

    if (colorRegex.test(newHex)) {
      setColor(newHex)
      setMainColor(newHex)
      setTemp("")
    }
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnBlur()
      setTemp("")
    }
  }

  return (
    <SideMenu title={`Palette generator`}>
      <div className="menuContainer  m-2 ">
        <div className="menuHeader   py-1 text-center text-xs italic text-slate-200">
          Input Color Value
        </div>
        <div className="menuBlock m-2   px-2 py-1">
          {/* color picker */}
          <div className="  m-2 ">
            <div
              onClick={handleClick}
              style={{
                background: color,
              }}
              className={`h-20 w-full cursor-pointer select-none rounded-lg border-2 border-transparent  leading-[18px] duration-200 sm:hover:border-white`}
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
                    color={color}
                    onChange={handleChange}
                    onChangeComplete={handleChangeComplete}
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
              value={temp}
              placeholder={color}
              onChange={e => setTemp(e.target.value)}
              onKeyDown={e => handleOnKeyDown(e)}
              onBlur={handleOnBlur}
              className=" block h-10 w-28   rounded-md border-2 border-darkJungle-400 bg-darkJungle-600 text-center  text-white placeholder-slate-300  duration-200 sm:hover:border-slate-300  "
            ></input>
            <div onClick={handleRandomColor} className="btnSecondary w-20">
              <img
                src={dice}
                alt="dice icon"
                className="inline-block  w-20  -translate-y-[2px] scale-[2] "
              />
            </div>
            <div
              onClick={() => setDisplaySwatches(true)}
              className="btnSecondary w-full text-center"
            >
              Swatches
            </div>

            {displaySwatches ? (
              <div className="absolute z-10 select-none">
                <div
                  className="fixed top-0 right-0 bottom-0  left-0  "
                  onMouseDown={() => setDisplaySwatches(false)}
                />
                <div className="translate-x-4 translate-y-10 rounded-md border-2">
                  <SwatchesPicker
                    width={280}
                    height={280}
                    onChangeComplete={handleChangeComplete}
                  />
                </div>
              </div>
            ) : null}
          </div>
          {/* hex color input */}
        </div>
      </div>
    </SideMenu>
  )
}
