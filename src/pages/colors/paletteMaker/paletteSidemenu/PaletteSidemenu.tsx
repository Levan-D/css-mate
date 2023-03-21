/** @format */

import SideMenu from "../../../../components/wrappers/SideMenu"
import PaletteInput from "./PaletteInput"
import PaletteSlider from "./PaletteSlider"
import ReverseBtn from "./ReverseBtn"
import { resetState as resetStateAction } from "../paletteSlice"
import { useAppDispatch } from "../../../../app/hooks"

export default function PaletteSidemenu() {
  const dispatch = useAppDispatch()

  const resetState = (): void => {
    dispatch(resetStateAction())
  }
  return (
    <SideMenu title={`Palette Maker`} resetState={resetState}>
      <div className="menuContainer m-4  pb-4  ">
        <PaletteSlider />
        <ReverseBtn />
        <PaletteInput />
      </div>
    </SideMenu>
  )
}
