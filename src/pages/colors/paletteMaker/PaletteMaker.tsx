/** @format */

import React from "react"
import PaletteSidemenu from "./paletteSidemenu/PaletteSidemenu"
import StopDisplay from "./StopDisplay"

export default function PaletteMaker() {
  return (
    <div className=" mx-4   mb-16  mt-8">
      <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary-300">drop shadows</span> for your project
        with ease
      </h1>
      <div className="mb-8 text-center font-cursiveCustom text-base">
        Scroll below for tips & tricks
      </div>
      <div className="mt-16 mb-16 flex flex-col justify-between gap-16 md:flex-row md:justify-center md:gap-2 lg:gap-12 ">
        <div>
          <PaletteSidemenu />
        </div>

        <StopDisplay />
      </div>
    </div>
  )
}
