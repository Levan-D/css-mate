/** @format */

import SideMenu from "../../../../components/SideMenu";
import PaletteInput from "./PaletteInput";
import PaletteSlider from "./PaletteSlider";
import ReverseBtn from "./ReverseBtn";
import { resetState as resetStateAction } from "../paletteMixerSlice";
import { useAppDispatch } from "../../../../app/hooks";
import colorWheel from "../../../../assets/misc/colorWheel.png";

export default function PaletteSidemenu() {
  const dispatch = useAppDispatch();

  const resetState = (): void => {
    dispatch(resetStateAction());
  };

  const toolInfo = (
    <div className="w-[300px]">
      <h4 className="menuHeader px-4  py-1">How to use:</h4>
      <ul className="my-2 ml-4 list-decimal  px-4 py-1 text-sm text-slate-200 [&>*]:my-1">
        <li>Pick the Quanity of steps.</li>
        <li>Input colors manually,pick from color inputter, or swatches.</li>
        <li>
          Analogous colors mix better - the closer they are on the color wheel
          the nicer inbetween colors they will generate. 
          <div className="mx-auto my-4 w-56 pr-4">
            <img src={colorWheel} alt="color wheel" />
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <SideMenu
      title={`Palette maker`}
      resetState={resetState}
      toolInfo={toolInfo}
    >
      <div className="menuContainer m-4  pb-4  ">
        <PaletteSlider />
        <ReverseBtn />
        <PaletteInput />
      </div>
    </SideMenu>
  );
}
