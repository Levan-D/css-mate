/** @format */

import { useState } from "react"
//@ts-ignore
import { ChromePicker } from "react-color"
import ColorInverter from "../utils/colors/ColorInverter"

type ColorPickerProps = { handleColorPick: (color: string) => void }

export type color = {
  hex: string
  rgb: {
    r: number
    g: number
    b: number
    a: number
  }
  hsl: {
    h: number
    s: number
    l: number
    a: number
  }
}

const ColorPicker = ({ handleColorPick }: ColorPickerProps) => {
  const [color, setColor] = useState({
    hex: `#000000`,
    rgb: {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    hsl: {
      h: 0,
      s: 0,
      l: 0,
      a: 0,
    },
  })

  const [displayColorPicker, setDisplayColorPicker] = useState(false)

  const colorData = [
    {
      color: "rgb(94, 161, 255)",
      value: "94, 161, 255",
      name: "blue",
    },
    {
      color: "rgb(255, 114, 94)",
      value: "255, 114, 94",
      name: "red",
    },
    {
      color: "rgb(94, 255, 94)",
      value: "94, 255, 94",
      name: "green",
    },
    {
      color: "rgb(255, 255, 255)",
      value: "255, 255, 255",
      name: "white",
    },
    {
      color: "rgb(0, 0, 0)",
      value: "0, 0, 0",
      name: "black",
    },
  ]
  const handleChange = (color: color) => {
    setColor(color)
  }

  const handleChangeComplete = (color: color) => {
    handleColorPick(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`)
  }

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker)
    setColor(color)
    handleColorPick(`${color.rgb.r},${color.rgb.g},${color.rgb.b}`)
  }

  const handleClose = () => {
    setDisplayColorPicker(false)
  }

  return (
    <div className="mt-2 flex gap-[6px] ">
      {colorData.map((color, i) => (
        <div
          key={i}
          style={{ backgroundColor: color.color }}
          onClick={() => handleColorPick(color.value)}
          className={`h-6 w-6 rounded-full border-2 border-transparent ${
            color.name === "white"
              ? "sm:hover:border-secondary-300"
              : "sm:hover:border-white"
          }  cursor-pointer duration-200`}
        ></div>
      ))}

      <div>
        <div
          onClick={handleClick}
          style={{
            background: color.hex,
            color: ColorInverter(color.hex, `bw`),
          }}
          className={`h-6 w-12 cursor-pointer select-none rounded-full border-2 border-transparent text-center text-sm font-normal italic leading-[18px] duration-200 sm:hover:border-white`}
        >
          cust
        </div>
        {displayColorPicker ? (
          <div className="absolute z-10 select-none">
            <div
              className="fixed top-0 right-0 bottom-0  left-0  "
              onMouseDown={handleClose}
            />
            <div className="-translate-x-36   ">
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
    </div>
  )
}

export default ColorPicker
