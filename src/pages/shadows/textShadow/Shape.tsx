/** @format */

import React, { useState } from "react"
import { selectTextShadowStyle } from "./textShadowSlice"
import { useAppSelector } from "../../../app/hooks"
import moon from "../../../assets/icons/moon.png"
import sun from "../../../assets/icons/sun.png"

import ColorPicker from "../../../components/ColorPicker"

const Shape = () => {
  const [shapeColor, setShapeColor] = useState("94,161,255")
  const textShadowStyle = useAppSelector(selectTextShadowStyle).join(",")
  const [darkmode, setDarkmode] = useState<boolean>(true)

  const handleColorPick = (color: string) => {
    setShapeColor(color.replace(/ /g, ""))
  }

  return (
    <div
      className={` ${
        darkmode ? "bg-inherit" : "border-secondary-300 bg-slate-100 "
      } mx-auto  flex h-[530px] w-96 flex-col justify-between rounded-xl border-2  md:h-full lg:w-[430px]  `}
    >
      {/* nav section */}
      <div className="menuHeader flex justify-between">
        <div>
          <img
            onClick={() => setDarkmode(x => !x)}
            className={` ${
              darkmode ? `sm:hover:border-white` : "sm:hover:border-secondary-300"
            } m-2 h-10 cursor-pointer rounded-full border-2  border-transparent duration-200`}
            src={darkmode ? moon : sun}
            alt="dark mode"
          />
        </div>
        <div className="m-2">
          <ColorPicker handleColorPick={handleColorPick} />
        </div>
      </div>
      {/* nav section */}
      {/* shape */}
      <div
        style={{
          textShadow: textShadowStyle,
          color: `rgb(${shapeColor})`,
        }}
        className={`   mx-auto mb-4    w-80 select-none text-center text-4xl font-bold`}
      >
        “You is kind. You is smart. You is important.”
      </div>
      {/* shape */}

      {/* bottom padding for flexbox to work @me */}
      <div className=" h-6 md:h-20  "></div>
      {/* bottom padding for flexbox to work @me */}
    </div>
  )
}

export default Shape
