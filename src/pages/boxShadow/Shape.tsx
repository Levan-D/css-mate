/** @format */

import React from "react"
import type { CurrentValueType } from "./BoxShadowTypes"

type ShapeProps = {
  currentValue: CurrentValueType
  shadowColor: string
}

const Shape = ({
  shadowColor,
  currentValue: { horizontal, vertical, blur, spread, opacity },
}: ShapeProps) => {
  return (
    <div className="mx-auto  w-fit  ">
      <div
        style={{
          boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowColor},${
            opacity / 100
          })`,
        }}
        className="  rounded-xl  h-[400px] w-[400px]  bg-primary border-2 "
      ></div>
    </div>
  )
}

export default Shape
