/** @format */

import SideMenu from "../../../../components/SideMenu";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { resetState as resetStateAction, addNewStop } from "../gradientSlice";

import TypePicker from "./TypePicker";
import KindPicker from "./KindPicker";
import StopsDisplay from "./StopsDisplay";
import StopsSlider from "./StopsSlider";
import LinearOps from "./LinearOps";
import RadialOps from "./RadialOps";
import ConicOps from "./ConicOps";

const GradientSidemenu = () => {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((store) => store.Gradient);

  const resetState = (): void => {
    dispatch(resetStateAction());
  };

  const toolInfo = (
    <div className="w-[450px]">
      <h4 className="menuHeader px-4  py-1">How to use:</h4>
      <ul className="my-2 ml-4 list-decimal  px-4 py-1 text-sm text-slate-200 [&>*]:my-1">
        <li>Pick the type of gradient you want from the first row options.</li>
        <li>Customize the type of gradient using the second row settings.</li>
        <li>Use the third row to position the gradient stops.</li>
        <li>Use the last row to pick colors and add aditional stops.</li>
        <li>Scroll below to copy the css rule.</li>
      </ul>
    </div>
  );

  return (
    <div className="mx-auto w-fit ">
      <SideMenu
        title={`Gradient config`}
        resetState={resetState}
        toolInfo={toolInfo}
      >
        <div className="menuContainer m-4  pb-4  ">
          <TypePicker />
          <div className="flex">
            <KindPicker />
            {type === "linear" && <LinearOps />}
            {type === "radial" && <RadialOps />}
            {type === "conic" && <ConicOps />}
          </div>
          <StopsSlider />
          <StopsDisplay />

          <div
            className="btnPrimary mx-auto mt-4"
            onClick={() => dispatch(addNewStop())}
          >
            New Stop
          </div>
        </div>
      </SideMenu>
    </div>
  );
};

export default GradientSidemenu;
