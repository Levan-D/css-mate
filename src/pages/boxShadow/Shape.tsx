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
    <div>
      <div
        style={{
          boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowColor},${
            opacity / 100
          })`,
        }}
        className="w-80 h-80 bg-primary    
      
      "
      ></div>
    </div>
  )
}

export default Shape
