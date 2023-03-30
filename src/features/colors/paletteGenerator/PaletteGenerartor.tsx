/** @format */

import React, { useState } from "react"
import PaletteSideMenu from "./PaletteSideMenu"
import PaletteOutput from "./PaletteOutput"

export default function PaletteGenerartor() {
  const [mainColor, setMainColor] = useState("#5ea1ff")

  return (
    <div className=" mx-4   mb-16  mt-8">
      {/* <h1 className="mb-2 text-center font-cursiveCustom   text-2xl">
        Generate <span className="text-secondary-300">color palettes</span> for your
        project with ease
      </h1>
      <p className=" mb-2 text-center font-cursiveCustom text-base">
        Pick the starting & ending color by clicking the shade rectangle, from swatches,
        or by entering a custom hex value.
      </p>
      <p className="mb-4 text-center font-cursiveCustom text-base">
        Pick a color close to white as the last shade to create a neutral tint palette for
        your styleguide.
      </p>
      <p className="mb-8 text-center font-cursiveCustom text-base">
        You can also check contrast ratios of backgrounds and textcolors for readability
        based on w3 standards.
      </p> */}

      <div className="mx-auto  w-[325px] ">
        <PaletteSideMenu setMainColor={setMainColor} />
      </div>

      <PaletteOutput mainColor={mainColor} />
    </div>
  )
}
