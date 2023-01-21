/** @format */

import React from "react"
import SideMenu from "../../../components/wrappers/SideMenu"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import ColorPicker from "../../../components/ColorPicker"
import Presets from "./Presets"
import {
  setColor,
  resetState as resetStateAction,
  toggleInset,
  setTabPage,
  deleteTabPage,
} from "../boxShadowSlice"
import { getBoxShadowTabs, addBoxShadow } from "../boxShadowSlice"
import Sliders from "./Sliders"
import TabsNConditions from "../../../components/wrappers/TabsNConditions"

const BoxShadowSidemenu = () => {
  const dispatch = useAppDispatch()
  const { boxShadowData, currentTab } = useAppSelector(state => state.boxShadow)
  const tabs = useAppSelector(getBoxShadowTabs)

  const resetState = (): void => {
    dispatch(resetStateAction())
  }

  const handleColorPick = (color: string) => {
    dispatch(setColor(color))
  }

  const handleSetTabPage = (i: number) => {
    dispatch(setTabPage(i))
  }
  const handleTabDelete = (id: string) => {
    dispatch(deleteTabPage(id))
  }
  const handleAddBoxShadow = (id: string) => {
    dispatch(addBoxShadow())
  }

  return (
    <div>
      <SideMenu title={`Box shadow config`} resetState={resetState}>
        {tabs && (
          <TabsNConditions
            tabs={tabs}
            currentTab={currentTab}
            handleSetTabPage={handleSetTabPage}
            handleOnDoubleClick={handleTabDelete}
            handleAddIconClick={handleAddBoxShadow}
          >
            <div className="p-4">
              <Sliders />
            </div>
          </TabsNConditions>
        )}

        <div className="flex justify-between mx-4">
          <div
            onClick={() => dispatch(toggleInset())}
            className={`${
              !boxShadowData[0].settings.inset && `!bg-slate-400 text-slate-800`
            } btnPrimary text-sm`}
          >
            Inner
          </div>
          <ColorPicker handleColorPick={handleColorPick} />
        </div>

        <hr className="my-4 mx-4 border-transparent " />

        <Presets />
      </SideMenu>
    </div>
  )
}

export default BoxShadowSidemenu
