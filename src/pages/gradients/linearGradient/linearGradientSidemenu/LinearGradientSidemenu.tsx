/** @format */

import SideMenu from "../../../../components/wrappers/SideMenu"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { resetState as resetStateAction, addNewStop } from "../linearGradientSlice"

import TypePicker from "./TypePicker"
import KindPicker from "./KindPicker"
import StopsDisplay from "./StopsDisplay"
import StopsSlider from "./StopsSlider"
import LinearOps from "./LinearOps"
import RadialOps from "./RadialOps"
import ConicOps from "./ConicOps"

const LinearGradientSidemenu = () => {
  const dispatch = useAppDispatch()
  const { type } = useAppSelector(store => store.linearGradient)

  const resetState = (): void => {
    dispatch(resetStateAction())
  }

  return (
    <div className="mx-auto w-fit ">
      <SideMenu title={`Gradient config`} resetState={resetState} visibility={true}>
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

          <div className="btnPrimary mx-auto mt-4" onClick={() => dispatch(addNewStop())}>
            New Stop
          </div>
        </div>
      </SideMenu>
    </div>
  )
}

export default LinearGradientSidemenu
