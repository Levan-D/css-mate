/** @format */

import React, { useState } from "react"
import type { CurrentValueType } from "./BoxShadowTypes"
import moon from "../../assets/icons/moon.png"
import sun from "../../assets/icons/sun.png"
import changeShape from "../../assets/icons/changeShape.png"

type ShapeProps = {
  currentValue: CurrentValueType
  shadowColor: string
  inset: boolean
}

const Shape = ({
  shadowColor,
  inset,
  currentValue: { horizontal, vertical, blur, spread, opacity },
}: ShapeProps) => {
  const [darkmode, setDarkmode] = useState<boolean>(true)
  const [square, setSquare] = useState<boolean>(true)

  return (
    <div
      className={` ${
        darkmode ? "bg-inherit" : "bg-slate-100 border-secondary"
      } mx-auto  border-2 rounded-xl h-[430px] md:h-full lg:w-[430px] w-96 flex  flex-col justify-center  `}
    >
      <div onClick={() => setDarkmode(x => !x)}>
        <img
          className={` ${
            darkmode ? `hover:border-white` : "hover:border-secondary"
          } border-2 border-transparent rounded-full h-10 hover:border-white cursor-pointer m-1 absolute  translate-y-[-90px]`}
          src={darkmode ? moon : sun}
          alt="dark mode"
        />
      </div>
      <div
        style={{
          boxShadow: `${
            inset ? `inset` : ""
          } ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowColor},${
            opacity / 100
          })`,
        }}
        onClick={() => setSquare(x => !x)}
        className={` ${
          square ? "rounded-xl " : "rounded-full "
        } mx-auto  mb-4 h-[250px] w-[250px] cursor-pointer  select-none   bg-primary`}
      >
        <img
          className="h-[50px] mx-auto my-auto  translate-y-[105px]"
          src={changeShape}
          alt=""
        />
      </div>
    </div>
  )
}

export default Shape
