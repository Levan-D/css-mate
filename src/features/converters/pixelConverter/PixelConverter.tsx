/** @format */

import React from "react"
import ConverterSidemenu from "./converterSidemenu/ConverterSidemenu"

export default function PixelConverter() {
  return (
    <main className="mx-4  my-8   ">
      <h1 className="mb-8 text-center font-cursiveCustom   text-2xl">
        Convert
        <span className="text-secondary-300">&#32;pixels&#32;</span>
        below
      </h1>

      <ConverterSidemenu />
    </main>
  );
}
