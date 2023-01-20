/** @format */

import React, { useState } from "react"
import HexToRGB from "../utils/HexToRGB"

type ColorPickerProps = { handleColorPick: (color: string) => void }

const ColorPicker = ({ handleColorPick }: ColorPickerProps) => {
  // color input stores colors as hex so you need to run it through HEXtoRGB function to receive RGB values x,x,x back.
  // we mainly use rgb  rgba so  using hex on top of it will mess everything up...

  const [color, setColor] = useState<string>("#000000")
  color
  const colorData = [
    {
      color: "rgb(255, 114, 94)",
      value: "255, 114, 94",
      name: "red",
    },
    {
      color: "rgb(94, 161, 255)",
      value: "94, 161, 255",
      name: "blue",
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

  return (
    <div className="flex gap-[6px] mt-2 ">
      {colorData.map((color, i) => (
        <div
          key={i}
          style={{ backgroundColor: color.color }}
          onClick={() => handleColorPick(color.value)}
          className={`h-6 w-6 rounded-full border-2 border-transparent ${
            color.name === "white" ? "hover:border-secondary" : "hover:border-slate-400"
          }  cursor-pointer duration-200`}
        ></div>
      ))}
      <input
        type="color"
        id="colorpicker"
        value={color}
        onChange={e => {
          setColor(e.target.value)
          handleColorPick(HexToRGB(e.target.value))
        }}
        onClick={e => {
          setColor((e.target as HTMLInputElement).value)
          handleColorPick(HexToRGB((e.target as HTMLInputElement).value))
        }}
        className="translate-y-[-2px] cursor-pointer bg-transparent h-[28px] border-2 border-transparent rounded-md  hover:border-slate-400 duration-200"
      ></input>
    </div>
  )
}

export default ColorPicker
