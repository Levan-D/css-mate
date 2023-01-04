/** @format */

import React, { useState } from "react"
import HexToRGB from "../utils/HexToRGB"

type ColorPickerProps = { HandleColorPick: (color: string) => void }

const ColorPicker = ({ HandleColorPick }: ColorPickerProps) => {
  const [color, setColor] = useState<string>("#000000")

  const colorData = [
    {
      color: "rgb(255, 0, 0)",
      value: "255, 0, 0",
      name: "red",
    },
    {
      color: "rgb(0, 0, 255)",
      value: "0, 0, 255",
      name: "blue",
    },
    {
      color: "rgb(60, 179, 113)",
      value: "60, 179, 113",
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
          onClick={() => HandleColorPick(color.value)}
          className={`h-6 w-6 rounded-full border-2 border-transparent ${
            color.name === "white" ? "hover:border-secondary" : "hover:border-white"
          }  cursor-pointer`}
        ></div>
      ))}
      <input
        type="color"
        id="colorpicker"
        value={color}
        onChange={e => {
          setColor(e.target.value)
          HandleColorPick(HexToRGB(e.target.value))
        }}
        className="translate-y-[-2px] cursor-pointer bg-transparent h-[28px]"
      ></input>
    </div>
  )
}

export default ColorPicker
