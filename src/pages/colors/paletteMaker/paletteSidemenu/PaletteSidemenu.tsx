/** @format */

import React from "react"
import SideMenu from "../../../../components/wrappers/SideMenu"
import PaletteInput from "./PaletteInput"
import PaletteSlider from "./PaletteSlider"

export default function PaletteSidemenu() {
  return (
    <SideMenu title={`Palette Maker`}>
      <div className="menuContainer m-4  pb-4  ">
        <PaletteSlider />
        <PaletteInput />
      </div>
    </SideMenu>
  )
}
