/** @format */

import React from "react"
import ConverterSidemenu from "./converterSidemenu/ConverterSidemenu"

export default function PixelConverter() {
  return (
    <div className="mx-4  mt-8   ">
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Convert
        <span className="text-secondary-300">&#32;colors&#32;</span>
        below
      </h1>

      <ConverterSidemenu />
    </div>
  )
}
