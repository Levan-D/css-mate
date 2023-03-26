/** @format */

import React from "react"
import PaletteSidemenu from "./paletteSidemenu/PaletteSidemenu"
import StopDisplay from "./StopDisplay"

import PaletteOutput from "./PaletteOutput"

export default function PaletteMixer() {
  return (
    <div className=" mx-4   mb-16  mt-8">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary-300">color palettes</span> for your
        project with ease
      </h1>
      <div className=" mb-2 text-center font-cursiveCustom text-base">
        Pick the starting & ending color by clicking the shade rectangle, from swatches,
        or by entering a custom hex value
      </div>
      <div className="mb-8 text-center font-cursiveCustom text-base">
        Pick a color close to white as the last shade to create a neutral tint palette for
        your styleguide
      </div>
      <div className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-4 lg:gap-12 ">
        <div>
          <PaletteSidemenu />
        </div>
        <StopDisplay />
      </div>
      <PaletteOutput />
    </div>
  )
}