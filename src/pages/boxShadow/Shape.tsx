/** @format */

import React from "react"
import type { currentValueType } from "./BoxShadowTypes"

type ShapeProps = {
  currentValue: currentValueType
}

const Shape = ({
  currentValue: { horizontal, vertical, blur, spread, shadowColor, shadowOpacity },
}: ShapeProps) => {
  return (
    <div>
      <div
        style={{
          boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowColor},${
            shadowOpacity / 100
          })`,
        }}
        className="w-80 h-80 bg-primary    
      
      "
      ></div>
    </div>
  )
}

export default Shape
